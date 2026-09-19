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

let _cached_decoder_for_E164Number: $.ASN1Decoder<E164Number> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E164Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E164Number (el: _Element): E164Number {
    if (!_cached_decoder_for_E164Number) { _cached_decoder_for_E164Number = $._decodeNumericString; }
    return _cached_decoder_for_E164Number(el);
}

let _cached_encoder_for_E164Number: $.ASN1Encoder<E164Number> | null = null;

/**
 * @summary Encodes a(n) E164Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E164Number, encoded as an ASN.1 Element.
 */
export
function _encode_E164Number (value: E164Number, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E164Number) { _cached_encoder_for_E164Number = $._encodeNumericString; }
    return _cached_encoder_for_E164Number(value, elGetter);
}


/* eslint-enable */
