import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.mjs";
import type StringEncoderGetter from "../types/StringEncoderGetter.mjs";
import stringifyRelativeDistinguishedName from "./RelativeDistinguishedName.mjs";
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";

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
    getEncoder: StringEncoderGetter,
    typeNameGetter: (type: OBJECT_IDENTIFIER) => string | undefined,
): string {
    return rdns
        .map((rdn) => stringifyRelativeDistinguishedName(rdn, getEncoder, typeNameGetter))
        .join(",");
}

export default stringifyRDNSequence;
