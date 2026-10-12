/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNCType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNCType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type MNCType = BIT_STRING;

let _cached_decoder_for_MNCType: $.ASN1Decoder<MNCType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MNCType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MNCType (el: _Element): MNCType {
    if (!_cached_decoder_for_MNCType) { _cached_decoder_for_MNCType = $._decodeBitString; }
    return _cached_decoder_for_MNCType(el);
}

let _cached_encoder_for_MNCType: $.ASN1Encoder<MNCType> | null = null;

/**
 * @summary Encodes a(n) MNCType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNCType, encoded as an ASN.1 Element.
 */
export
function _encode_MNCType (value: MNCType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MNCType) { _cached_encoder_for_MNCType = $._encodeBitString; }
    return _cached_encoder_for_MNCType(value, elGetter);
}


/* eslint-enable */
