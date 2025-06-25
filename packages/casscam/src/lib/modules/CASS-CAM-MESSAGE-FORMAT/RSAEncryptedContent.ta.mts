/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RSAENCRYPTED, _get_decoder_for_RSAENCRYPTED, _get_encoder_for_RSAENCRYPTED } from "../CASS-CAM-MESSAGE-FORMAT/RSAENCRYPTED.ta.mjs";
import { Content, _decode_Content, _encode_Content } from "../CASS-CAM-MESSAGE-FORMAT/Content.ta.mjs";

/**
 * @summary RSAEncryptedContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RSAEncryptedContent  ::=  RSAENCRYPTED{Content}
 * ```
 */
export
type RSAEncryptedContent = RSAENCRYPTED; // DefinedType


let _cached_decoder_for_RSAEncryptedContent: $.ASN1Decoder<RSAEncryptedContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RSAEncryptedContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAEncryptedContent} The decoded data structure.
 */
export
function _decode_RSAEncryptedContent (el: _Element): RSAEncryptedContent {
    if (!_cached_decoder_for_RSAEncryptedContent) { _cached_decoder_for_RSAEncryptedContent = _get_decoder_for_RSAENCRYPTED<Content>(_decode_Content); }
    return _cached_decoder_for_RSAEncryptedContent(el);
}


let _cached_encoder_for_RSAEncryptedContent: $.ASN1Encoder<RSAEncryptedContent> | null = null;


/**
 * @summary Encodes a(n) RSAEncryptedContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAEncryptedContent, encoded as an ASN.1 Element.
 */
export
function _encode_RSAEncryptedContent (value: RSAEncryptedContent, elGetter: $.ASN1Encoder<RSAEncryptedContent>): _Element {
    if (!_cached_encoder_for_RSAEncryptedContent) { _cached_encoder_for_RSAEncryptedContent = _get_encoder_for_RSAENCRYPTED<Content>(_encode_Content); }
    return _cached_encoder_for_RSAEncryptedContent(value, elGetter);
}


/* eslint-enable */
