/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InnerContextToken
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InnerContextToken ::= ANY
 * -- interpretation based on predecessor InitialContextToken
 * -- ASN.1 structure not required
 * ```
 */
export
type InnerContextToken = _Element; // AnyType

let _cached_decoder_for_InnerContextToken: $.ASN1Decoder<InnerContextToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InnerContextToken
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InnerContextToken (el: _Element): InnerContextToken {
    if (!_cached_decoder_for_InnerContextToken) { _cached_decoder_for_InnerContextToken = $._decodeAny; }
    return _cached_decoder_for_InnerContextToken(el);
}

let _cached_encoder_for_InnerContextToken: $.ASN1Encoder<InnerContextToken> | null = null;

/**
 * @summary Encodes a(n) InnerContextToken into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InnerContextToken, encoded as an ASN.1 Element.
 */
export
function _encode_InnerContextToken (value: InnerContextToken, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InnerContextToken) { _cached_encoder_for_InnerContextToken = $._encodeAny; }
    return _cached_encoder_for_InnerContextToken(value, elGetter);
}


/* eslint-enable */
