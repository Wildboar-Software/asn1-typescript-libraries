/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncryptedContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedContent  ::=  OCTET STRING
 * ```
 */
export
type EncryptedContent = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EncryptedContent: $.ASN1Decoder<EncryptedContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedContent (el: _Element): EncryptedContent {
    if (!_cached_decoder_for_EncryptedContent) { _cached_decoder_for_EncryptedContent = $._decodeOctetString; }
    return _cached_decoder_for_EncryptedContent(el);
}

let _cached_encoder_for_EncryptedContent: $.ASN1Encoder<EncryptedContent> | null = null;

/**
 * @summary Encodes a(n) EncryptedContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContent, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedContent (value: EncryptedContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedContent) { _cached_encoder_for_EncryptedContent = $._encodeOctetString; }
    return _cached_encoder_for_EncryptedContent(value, elGetter);
}


/* eslint-enable */
