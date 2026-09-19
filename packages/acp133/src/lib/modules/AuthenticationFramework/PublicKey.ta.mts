/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKey  ::=  BIT STRING
 * ```
 */
export
type PublicKey = BIT_STRING;

let _cached_decoder_for_PublicKey: $.ASN1Decoder<PublicKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicKey (el: _Element): PublicKey {
    if (!_cached_decoder_for_PublicKey) { _cached_decoder_for_PublicKey = $._decodeBitString; }
    return _cached_decoder_for_PublicKey(el);
}

let _cached_encoder_for_PublicKey: $.ASN1Encoder<PublicKey> | null = null;

/**
 * @summary Encodes a(n) PublicKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKey, encoded as an ASN.1 Element.
 */
export
function _encode_PublicKey (value: PublicKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicKey) { _cached_encoder_for_PublicKey = $._encodeBitString; }
    return _cached_encoder_for_PublicKey(value, elGetter);
}


/* eslint-enable */
