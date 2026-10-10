/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E164Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E164Number  ::=  NumericString (SIZE(1..15))
 * ```
 */
export
type E164Number = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) E164Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_E164Number = $._decodeNumericString;

/**
 * @summary Encodes a(n) E164Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E164Number, encoded as an ASN.1 Element.
 */
export const _encode_E164Number = $._encodeNumericString;


/* eslint-enable */
