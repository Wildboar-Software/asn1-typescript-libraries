/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialCrlNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialCrlNumber  ::=  INTEGER
 * ```
 */
export
type PartialCrlNumber = INTEGER;

let _cached_decoder_for_PartialCrlNumber: $.ASN1Decoder<PartialCrlNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartialCrlNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartialCrlNumber (el: _Element): PartialCrlNumber {
    if (!_cached_decoder_for_PartialCrlNumber) { _cached_decoder_for_PartialCrlNumber = $._decodeInteger; }
    return _cached_decoder_for_PartialCrlNumber(el);
}

let _cached_encoder_for_PartialCrlNumber: $.ASN1Encoder<PartialCrlNumber> | null = null;

/**
 * @summary Encodes a(n) PartialCrlNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialCrlNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PartialCrlNumber (value: PartialCrlNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartialCrlNumber) { _cached_encoder_for_PartialCrlNumber = $._encodeInteger; }
    return _cached_encoder_for_PartialCrlNumber(value, elGetter);
}


/* eslint-enable */
