/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary X121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X121Address  ::=  NumericString(SIZE (1..ub-x121-address-length))
 * ```
 */
export type X121Address = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) X121Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X121Address} The decoded data structure.
 */
export function _decode_X121Address(el: _Element) {
    return $._decodeNumericString(el);
}

/**
 * @summary Encodes a(n) X121Address into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X121Address, encoded as an ASN.1 Element.
 */
export function _encode_X121Address(
    value: X121Address,
    elGetter: $.ASN1Encoder<X121Address>
) {
    return $._encodeNumericString(value, elGetter);
}


/* eslint-enable */
