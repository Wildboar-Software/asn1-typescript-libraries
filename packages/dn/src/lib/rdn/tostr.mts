import { attributeTypeAndValueToString } from "../atav/tostr.mjs";
import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";

/**
 * @summary Stringify a relative distinguished name according to RFC 4514.
 * @description
 * 
 * This function stringifies a relative distinguished name according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514). Each attribute
 * type and value is converted as {@link AttributeTypeAndValue.toString}
 * does, except that each value is escaped, and they are joined with `+` in
 * their existing order.
 * 
 * @param rdn The relative distinguished name to stringify.
 * @returns A string of the form `type=value+type=value...`
 * @function
 */
export
function relativeDistinguishedNameToString (
    rdn: AttributeTypeAndValue[],
): string {
    if (rdn.length === 0) {
        return "";
    }
    if (rdn.length === 1) {
        return attributeTypeAndValueToString(rdn[0], true);
    }
    return rdn
        .map((atav) => attributeTypeAndValueToString(atav, true))
        .join("+");
}

export default relativeDistinguishedNameToString;
