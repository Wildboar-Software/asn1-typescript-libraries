/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NumberDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits ::=  IA5String
 * ```
 */
export
type NumberDigits = IA5String; // IA5String

let _cached_decoder_for_NumberDigits: $.ASN1Decoder<NumberDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberDigits (el: _Element): NumberDigits {
    if (!_cached_decoder_for_NumberDigits) { _cached_decoder_for_NumberDigits = $._decodeIA5String; }
    return _cached_decoder_for_NumberDigits(el);
}

let _cached_encoder_for_NumberDigits: $.ASN1Encoder<NumberDigits> | null = null;

/**
 * @summary Encodes a(n) NumberDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberDigits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberDigits (value: NumberDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberDigits) { _cached_encoder_for_NumberDigits = $._encodeIA5String; }
    return _cached_encoder_for_NumberDigits(value, elGetter);
}


/* eslint-enable */
