import { stringifyAttributeTypeAndValue } from "./AttributeTypeAndValue.js";
import type StringEncoderGetter from "../types/StringEncoderGetter.js";
import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.js";
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
