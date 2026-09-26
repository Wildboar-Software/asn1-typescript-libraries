import * as $ from "@wildboar/asn1/functional";
import { _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue, } from "./AttributeTypeAndValue.ta.mjs";
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export const _decode_RelativeDistinguishedName = $._decodeSetOf(() => _decode_AttributeTypeAndValue);
/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export const _encode_RelativeDistinguishedName = $._encodeSetOf(() => _encode_AttributeTypeAndValue, $.BER);
/* eslint-enable */
