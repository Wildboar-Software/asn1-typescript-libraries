/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TEIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TEIType  ::=  BIT STRING (SIZE (60))
 * ```
 */
export
type TEIType = BIT_STRING;

let _cached_decoder_for_TEIType: $.ASN1Decoder<TEIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TEIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TEIType (el: _Element): TEIType {
    if (!_cached_decoder_for_TEIType) { _cached_decoder_for_TEIType = $._decodeBitString; }
    return _cached_decoder_for_TEIType(el);
}

let _cached_encoder_for_TEIType: $.ASN1Encoder<TEIType> | null = null;

/**
 * @summary Encodes a(n) TEIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TEIType, encoded as an ASN.1 Element.
 */
export
function _encode_TEIType (value: TEIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TEIType) { _cached_encoder_for_TEIType = $._encodeBitString; }
    return _cached_encoder_for_TEIType(value, elGetter);
}


/* eslint-enable */
