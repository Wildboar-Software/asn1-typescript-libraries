import { stringifyAttributeTypeAndValue } from "./AttributeTypeAndValue.mjs";
import type StringEncoderGetter from "../types/StringEncoderGetter.mjs";
import type AttributeTypeAndValue from "../types/AttributeTypeAndValue.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";

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
