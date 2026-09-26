import { type AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import stringifyRelativeDistinguishedName from "../rdn/tostr.mjs";

/**
 * @summary Stringify an RDN sequence according to RFC 4514.
 * @description
 * 
 * This function stringifies an RDN sequence according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 * 
 * @param rdns The RDN sequence to stringify.
 * @param getEncoder A function that can be used to get a string encoder.
 * @param typeNameGetter A function that can be used to get an attribute type name.
 * @returns The stringified RDN sequence.
 * @function
 */
export
function stringifyRDNSequence (
    rdns: AttributeTypeAndValue[][],
): string {
    if (rdns.length === 0) {
        return "";
    }
    if (rdns.length === 1) {
        return stringifyRelativeDistinguishedName(rdns[0]);
    }
    return rdns
        .map((rdn) => stringifyRelativeDistinguishedName(rdn))
        .join(",");
}

export default stringifyRDNSequence;
