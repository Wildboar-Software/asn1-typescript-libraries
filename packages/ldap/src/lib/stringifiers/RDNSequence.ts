import type AttributeTypeAndValue from "../types/AttributeTypeAndValue";
import type StringEncoderGetter from "../types/StringEncoderGetter";
import stringifyRelativeDistinguishedName from "./RelativeDistinguishedName";
import { OBJECT_IDENTIFIER } from "asn1-ts";

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
