/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentityToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentityToken  ::=  UTF8String
 * ```
 */
export
type IdentityToken = UTF8String; // UTF8String

let _cached_decoder_for_IdentityToken: $.ASN1Decoder<IdentityToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdentityToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IdentityToken (el: _Element): IdentityToken {
    if (!_cached_decoder_for_IdentityToken) { _cached_decoder_for_IdentityToken = $._decodeUTF8String; }
    return _cached_decoder_for_IdentityToken(el);
}

let _cached_encoder_for_IdentityToken: $.ASN1Encoder<IdentityToken> | null = null;

/**
 * @summary Encodes a(n) IdentityToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentityToken, encoded as an ASN.1 Element.
 */
export
function _encode_IdentityToken (value: IdentityToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IdentityToken) { _cached_encoder_for_IdentityToken = $._encodeUTF8String; }
    return _cached_encoder_for_IdentityToken(value, elGetter);
}


/* eslint-enable */
