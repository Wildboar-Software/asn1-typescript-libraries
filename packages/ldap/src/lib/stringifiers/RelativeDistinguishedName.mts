import { stringifyAttributeTypeAndValue } from "./AttributeTypeAndValue.mjs";
import type StringEncoderGetter from "../types/StringEncoderGetter.mjs";
import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.mjs";
import type { OBJECT_IDENTIFIER } from "asn1-ts";

export
function stringifyRelativeDistinguishedName (
    rdn: AttributeTypeAndValue[],
    getEncoder: StringEncoderGetter,
    typeNameGetter: (type: OBJECT_IDENTIFIER) => string | undefined,
): string {
    return rdn
        .map((atav) => stringifyAttributeTypeAndValue(atav, getEncoder, typeNameGetter))
        .sort()
        .join("+");
}

export default stringifyRelativeDistinguishedName;
