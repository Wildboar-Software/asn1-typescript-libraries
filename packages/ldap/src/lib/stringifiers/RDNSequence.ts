import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.js";
import type StringEncoderGetter from "../types/StringEncoderGetter.js";
import stringifyRelativeDistinguishedName from "./RelativeDistinguishedName.js";
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
