import isEscaped from "../isEscaped.mjs";
import {
    validateRelativeDistinguishedNameString,
} from "../rdn/validate.mjs";
import type { RDNSequenceString } from "../brands.mjs";

const COMMA: number = 0x2C; // ,

/**
 * @summary Validate a distinguished name string.
 * @description
 *
 * Checks IETF RFC 4514, section 3, `distinguishedName`: the
 * string is empty (which names the root DSE) or holds one or
 * more relative distinguished names joined by unescaped commas,
 * each validated with
 * {@link validateRelativeDistinguishedNameString}. Empty RDNs
 * (from leading, trailing, or doubled commas) are rejected, as
 * are RDNs without an unescaped `=`, numeric attribute types
 * without `hexstring` values, invalid numeric OIDs, and
 * malformed escapes.
 *
 * @param dn The distinguished name, in RFC 4514 string form.
 * @throws {SyntaxError} If `dn` is invalid.
 * @function
 */
export
function validateRDNSequenceString (
    dn: string,
): asserts dn is RDNSequenceString {
    if (dn.length === 0) {
        return; // The empty DN is valid: it names the root DSE.
    }
    let start: number = 0;
    for (let i = 0; i <= dn.length; i++) {
        const atEnd: boolean = (i === dn.length);
        if (
            !atEnd
            && !(
                (dn.charCodeAt(i) === COMMA)
                && !isEscaped(dn, i)
            )
        ) {
            continue;
        }
        const rdn: string = dn.slice(start, i);
        if (rdn.length === 0) {
            throw new SyntaxError("empty relative distinguished name");
        }
        validateRelativeDistinguishedNameString(rdn);
        start = i + 1;
    }
}

/**
 * @summary Check whether a string is a valid distinguished name.
 * @description
 *
 * Returns whether {@link validateRDNSequenceString} accepts `dn`.
 *
 * @param dn The distinguished name, in RFC 4514 string form.
 * @returns Whether `dn` is valid.
 * @function
 */
export
function isRDNSequenceString (dn: string): dn is RDNSequenceString {
    try {
        validateRDNSequenceString(dn);
        return true;
    } catch (e) {
        if (e instanceof SyntaxError) {
            return false;
        }
        throw e;
    }
}

export default validateRDNSequenceString;
