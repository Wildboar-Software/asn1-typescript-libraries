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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION EncryptedContent */
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
export type EncryptedContent = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContent */
let _cached_decoder_for_EncryptedContent: $.ASN1Decoder<EncryptedContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContent */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContent} The decoded data structure.
 */
export function _decode_EncryptedContent(el: _Element) {
    if (!_cached_decoder_for_EncryptedContent) {
        _cached_decoder_for_EncryptedContent = $._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContent */
let _cached_encoder_for_EncryptedContent: $.ASN1Encoder<EncryptedContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContent */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContent */
/**
 * @summary Encodes a(n) EncryptedContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContent, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContent(
    value: EncryptedContent,
    elGetter: $.ASN1Encoder<EncryptedContent>
) {
    if (!_cached_encoder_for_EncryptedContent) {
        _cached_encoder_for_EncryptedContent = $._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContent */

/* eslint-enable */
