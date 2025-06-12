/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { RSAENCRYPTED, _get_decoder_for_RSAENCRYPTED, _get_encoder_for_RSAENCRYPTED } from "../CASS-CAM-MESSAGE-FORMAT/RSAENCRYPTED.ta.js";
export { RSAENCRYPTED, _get_decoder_for_RSAENCRYPTED, _get_encoder_for_RSAENCRYPTED } from "../CASS-CAM-MESSAGE-FORMAT/RSAENCRYPTED.ta.js";
import { Content, _decode_Content, _encode_Content } from "../CASS-CAM-MESSAGE-FORMAT/Content.ta.js";
export { Content, _decode_Content, _encode_Content } from "../CASS-CAM-MESSAGE-FORMAT/Content.ta.js";


/* START_OF_SYMBOL_DEFINITION RSAEncryptedContent */
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
/* END_OF_SYMBOL_DEFINITION RSAEncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAEncryptedContent */
let _cached_decoder_for_RSAEncryptedContent: $.ASN1Decoder<RSAEncryptedContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAEncryptedContent */

/* START_OF_SYMBOL_DEFINITION _decode_RSAEncryptedContent */
/**
 * @summary Decodes an ASN.1 element into a(n) RSAEncryptedContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAEncryptedContent} The decoded data structure.
 */
export
function _decode_RSAEncryptedContent (el: _Element) {
    if (!_cached_decoder_for_RSAEncryptedContent) { _cached_decoder_for_RSAEncryptedContent = _get_decoder_for_RSAENCRYPTED<Content>(_decode_Content); }
    return _cached_decoder_for_RSAEncryptedContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSAEncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAEncryptedContent */
let _cached_encoder_for_RSAEncryptedContent: $.ASN1Encoder<RSAEncryptedContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAEncryptedContent */

/* START_OF_SYMBOL_DEFINITION _encode_RSAEncryptedContent */
/**
 * @summary Encodes a(n) RSAEncryptedContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAEncryptedContent, encoded as an ASN.1 Element.
 */
export
function _encode_RSAEncryptedContent (value: RSAEncryptedContent, elGetter: $.ASN1Encoder<RSAEncryptedContent>) {
    if (!_cached_encoder_for_RSAEncryptedContent) { _cached_encoder_for_RSAEncryptedContent = _get_encoder_for_RSAENCRYPTED<Content>(_encode_Content); }
    return _cached_encoder_for_RSAEncryptedContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSAEncryptedContent */

/* eslint-enable */
