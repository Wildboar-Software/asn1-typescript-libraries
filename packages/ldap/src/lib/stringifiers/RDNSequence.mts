import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.mjs";
import type StringEncoderGetter from "../types/StringEncoderGetter.mjs";
import stringifyRelativeDistinguishedName from "./RelativeDistinguishedName.mjs";
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";

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
