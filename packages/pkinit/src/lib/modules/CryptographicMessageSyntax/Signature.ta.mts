/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Signature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signature  ::=  BIT STRING
 * ```
 */
export
type Signature = BIT_STRING;

let _cached_decoder_for_Signature: $.ASN1Decoder<Signature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signature (el: _Element): Signature {
    if (!_cached_decoder_for_Signature) { _cached_decoder_for_Signature = $._decodeBitString; }
    return _cached_decoder_for_Signature(el);
}

let _cached_encoder_for_Signature: $.ASN1Encoder<Signature> | null = null;

/**
 * @summary Encodes a(n) Signature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature, encoded as an ASN.1 Element.
 */
export
function _encode_Signature (value: Signature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signature) { _cached_encoder_for_Signature = $._encodeBitString; }
    return _cached_encoder_for_Signature(value, elGetter);
}


/* eslint-enable */
