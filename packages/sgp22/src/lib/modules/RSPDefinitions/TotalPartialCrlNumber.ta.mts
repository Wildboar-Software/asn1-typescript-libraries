/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TotalPartialCrlNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TotalPartialCrlNumber  ::=  INTEGER
 * ```
 */
export
type TotalPartialCrlNumber = INTEGER;

let _cached_decoder_for_TotalPartialCrlNumber: $.ASN1Decoder<TotalPartialCrlNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TotalPartialCrlNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TotalPartialCrlNumber (el: _Element): TotalPartialCrlNumber {
    if (!_cached_decoder_for_TotalPartialCrlNumber) { _cached_decoder_for_TotalPartialCrlNumber = $._decodeInteger; }
    return _cached_decoder_for_TotalPartialCrlNumber(el);
}

let _cached_encoder_for_TotalPartialCrlNumber: $.ASN1Encoder<TotalPartialCrlNumber> | null = null;

/**
 * @summary Encodes a(n) TotalPartialCrlNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TotalPartialCrlNumber, encoded as an ASN.1 Element.
 */
export
function _encode_TotalPartialCrlNumber (value: TotalPartialCrlNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TotalPartialCrlNumber) { _cached_encoder_for_TotalPartialCrlNumber = $._encodeInteger; }
    return _cached_encoder_for_TotalPartialCrlNumber(value, elGetter);
}


/* eslint-enable */
