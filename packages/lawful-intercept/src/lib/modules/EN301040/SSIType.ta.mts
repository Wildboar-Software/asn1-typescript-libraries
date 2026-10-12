/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SSIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSIType  ::=  BIT STRING (SIZE (24))
 * ```
 */
export
type SSIType = BIT_STRING;

let _cached_decoder_for_SSIType: $.ASN1Decoder<SSIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSIType (el: _Element): SSIType {
    if (!_cached_decoder_for_SSIType) { _cached_decoder_for_SSIType = $._decodeBitString; }
    return _cached_decoder_for_SSIType(el);
}

let _cached_encoder_for_SSIType: $.ASN1Encoder<SSIType> | null = null;

/**
 * @summary Encodes a(n) SSIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSIType, encoded as an ASN.1 Element.
 */
export
function _encode_SSIType (value: SSIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSIType) { _cached_encoder_for_SSIType = $._encodeBitString; }
    return _cached_encoder_for_SSIType(value, elGetter);
}


/* eslint-enable */
