import type { RelativeDistinguishedName } from "../RelativeDistinguishedName.ta.mjs";
import attributeTypeAndValueToASN1String from "../atav/toasn1.mjs";

/**
 * @summary Convert a relative distinguished name to textual ASN.1 value notation
 * @description
 *
 * Produces ASN.1 value notation for the `SET OF AttributeTypeAndValue`: the
 * ATAVs, each converted with {@link attributeTypeAndValueToASN1String}, are
 * separated by `, ` and enclosed in braces. The ATAVs are written in their
 * existing order. An empty RDN is written as `{ }`.
 *
 * @param rdn The relative distinguished name to convert.
 * @returns A string of the form `{ { type ..., value ... }, ... }`
 * @function
 */
export
function relativeDistinguishedNameToASN1String (
    rdn: RelativeDistinguishedName,
): string {
    if (rdn.length === 0) {
        return "{ }";
    }
    return `{ ${rdn.map(attributeTypeAndValueToASN1String).join(", ")} }`;
}

export default relativeDistinguishedNameToASN1String;
