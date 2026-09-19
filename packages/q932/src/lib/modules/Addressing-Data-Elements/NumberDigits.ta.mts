/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberDigits  ::=  NumericString(SIZE (1..20))
 * ```
 */
export
type NumberDigits = NumericString; // NumericString

let _cached_decoder_for_NumberDigits: $.ASN1Decoder<NumberDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberDigits (el: _Element): NumberDigits {
    if (!_cached_decoder_for_NumberDigits) { _cached_decoder_for_NumberDigits = $._decodeNumericString; }
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
    if (!_cached_encoder_for_NumberDigits) { _cached_encoder_for_NumberDigits = $._encodeNumericString; }
    return _cached_encoder_for_NumberDigits(value, elGetter);
}


/* eslint-enable */
