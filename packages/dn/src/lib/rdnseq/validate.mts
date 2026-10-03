import isEscaped from "../isEscaped.mjs";
import {
    validateRelativeDistinguishedNameString,
} from "../rdn/validate.mjs";

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
 * @function
 */
export
function validateRDNSequenceString (dn: string): void {
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

export default validateRDNSequenceString;
