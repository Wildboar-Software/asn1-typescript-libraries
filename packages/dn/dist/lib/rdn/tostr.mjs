import { attributeTypeAndValueToString } from "../atav/tostr.mjs";
/**
 * @summary Stringify a relative distinguished name according to RFC 4514.
 * @description
 *
 * This function stringifies a relative distinguished name according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 *
 * @param rdn The relative distinguished name to stringify.
 * @param getEncoder A function that can be used to get a string encoder.
 * @param typeNameGetter A function that can be used to get an attribute type name.
 * @returns The stringified relative distinguished name.
 * @function
 */
function stringifyRelativeDistinguishedName(rdn) {
    if (rdn.length === 0) {
        return "";
    }
    if (rdn.length === 1) {
        return attributeTypeAndValueToString(rdn[0]);
    }
    return rdn
        .map((atav) => attributeTypeAndValueToString(atav))
        .sort()
        .join("+");
}
export default stringifyRelativeDistinguishedName;
