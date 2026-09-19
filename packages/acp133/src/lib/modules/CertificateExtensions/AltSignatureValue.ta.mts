/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AltSignatureValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export
type AltSignatureValue = BIT_STRING;

let _cached_decoder_for_AltSignatureValue: $.ASN1Decoder<AltSignatureValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AltSignatureValue (el: _Element): AltSignatureValue {
    if (!_cached_decoder_for_AltSignatureValue) { _cached_decoder_for_AltSignatureValue = $._decodeBitString; }
    return _cached_decoder_for_AltSignatureValue(el);
}

let _cached_encoder_for_AltSignatureValue: $.ASN1Encoder<AltSignatureValue> | null = null;

/**
 * @summary Encodes a(n) AltSignatureValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureValue, encoded as an ASN.1 Element.
 */
export
function _encode_AltSignatureValue (value: AltSignatureValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AltSignatureValue) { _cached_encoder_for_AltSignatureValue = $._encodeBitString; }
    return _cached_encoder_for_AltSignatureValue(value, elGetter);
}


/* eslint-enable */
