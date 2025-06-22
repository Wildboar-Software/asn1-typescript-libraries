/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TripleDES
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TripleDES  ::=  SEQUENCE SIZE(oneKey..threeKeys) OF INTEGER
 * ```
 */
export type TripleDES = INTEGER[]; // SequenceOfType


let _cached_decoder_for_TripleDES: $.ASN1Decoder<TripleDES> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TripleDES
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TripleDES} The decoded data structure.
 */
export function _decode_TripleDES(el: _Element) {
    if (!_cached_decoder_for_TripleDES) {
        _cached_decoder_for_TripleDES = $._decodeSequenceOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_TripleDES(el);
}


let _cached_encoder_for_TripleDES: $.ASN1Encoder<TripleDES> | null = null;


/**
 * @summary Encodes a(n) TripleDES into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TripleDES, encoded as an ASN.1 Element.
 */
export function _encode_TripleDES(
    value: TripleDES,
    elGetter: $.ASN1Encoder<TripleDES>
) {
    if (!_cached_encoder_for_TripleDES) {
        _cached_encoder_for_TripleDES = $._encodeSequenceOf<INTEGER>(
            () => $._encodeInteger,
            $.DER
        );
    }
    return _cached_encoder_for_TripleDES(value, elGetter);
}


/* eslint-enable */
