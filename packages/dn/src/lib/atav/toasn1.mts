import type { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";

/**
 * @summary Convert an attribute type and value to textual ASN.1 value notation
 * @description
 *
 * Produces ASN.1 value notation for the `SEQUENCE` of
 * `AttributeTypeAndValue`, such as `{ type 2.5.4.3, value foo }`. The `type`
 * is written as a numeric object identifier. The `value` is whatever the
 * `toString()` method of the value element returns, which is only a
 * "good enough" approximation: it is not guaranteed to be valid ASN.1 value
 * notation (for instance, strings are not quoted or escaped), and it cannot
 * be reliably parsed back into an element, since the attribute's syntax is
 * not known. Unrecognized extensions are not included.
 *
 * @param atav The attribute type and value to convert.
 * @returns A string of the form `{ type numericoid, value ... }`
 * @function
 */
export
function attributeTypeAndValueToASN1String (
    atav: AttributeTypeAndValue,
): string {
    return `{ type ${atav.type_.asn1Notation}, value ${atav.value.toString()} }`;
}

export default attributeTypeAndValueToASN1String;
