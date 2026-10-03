import isEscaped from "../isEscaped.mjs";
import { validateAttributeTypeAndValueString } from "../atav/validate.mjs";

const PLUS: number = 0x2B; // +

/**
 * @summary Validate one `relativeDistinguishedName` string.
 * @description
 *
 * Checks IETF RFC 4514, section 3,
 * `relativeDistinguishedName`: the RDN is non-empty and holds
 * one or more `attributeTypeAndValue` strings joined by
 * unescaped `+` signs, each validated as escaped with
 * {@link validateAttributeTypeAndValueString}. Empty RDNs and
 * empty attribute types and values (from leading, trailing, or
 * doubled `+` signs) are rejected.
 *
 * @param rdn The relative distinguished name, e.g. `cn=a+sn=b`.
 * @function
 */
export
function validateRelativeDistinguishedNameString (rdn: string): void {
    if (rdn.length === 0) {
        throw new SyntaxError("empty relative distinguished name");
    }
    let start: number = 0;
    for (let i = 0; i <= rdn.length; i++) {
        const atEnd: boolean = (i === rdn.length);
        if (
            !atEnd
            && !(
                (rdn.charCodeAt(i) === PLUS)
                && !isEscaped(rdn, i)
            )
        ) {
            continue;
        }
        const atav: string = rdn.slice(start, i);
        if (atav.length === 0) {
            throw new SyntaxError("empty attribute type and value");
        }
        validateAttributeTypeAndValueString(atav, true);
        start = i + 1;
    }
}

export default validateRelativeDistinguishedNameString;
