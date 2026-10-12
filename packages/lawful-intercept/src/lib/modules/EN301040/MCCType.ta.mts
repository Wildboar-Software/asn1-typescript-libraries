/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCCType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCCType  ::=  BIT STRING (SIZE (10))
 * ```
 */
export
type MCCType = BIT_STRING;

let _cached_decoder_for_MCCType: $.ASN1Decoder<MCCType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCCType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCCType (el: _Element): MCCType {
    if (!_cached_decoder_for_MCCType) { _cached_decoder_for_MCCType = $._decodeBitString; }
    return _cached_decoder_for_MCCType(el);
}

let _cached_encoder_for_MCCType: $.ASN1Encoder<MCCType> | null = null;

/**
 * @summary Encodes a(n) MCCType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCCType, encoded as an ASN.1 Element.
 */
export
function _encode_MCCType (value: MCCType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCCType) { _cached_encoder_for_MCCType = $._encodeBitString; }
    return _cached_encoder_for_MCCType(value, elGetter);
}


/* eslint-enable */
