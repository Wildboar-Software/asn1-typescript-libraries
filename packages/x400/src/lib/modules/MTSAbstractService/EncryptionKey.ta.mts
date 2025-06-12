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

/* START_OF_SYMBOL_DEFINITION EncryptionKey */
/**
 * @summary EncryptionKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionKey  ::=  BIT STRING
 * ```
 */
export type EncryptionKey = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */
let _cached_decoder_for_EncryptionKey: $.ASN1Decoder<EncryptionKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptionKey */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionKey} The decoded data structure.
 */
export function _decode_EncryptionKey(el: _Element) {
    if (!_cached_decoder_for_EncryptionKey) {
        _cached_decoder_for_EncryptionKey = $._decodeBitString;
    }
    return _cached_decoder_for_EncryptionKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */
let _cached_encoder_for_EncryptionKey: $.ASN1Encoder<EncryptionKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptionKey */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptionKey */
/**
 * @summary Encodes a(n) EncryptionKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionKey, encoded as an ASN.1 Element.
 */
export function _encode_EncryptionKey(
    value: EncryptionKey,
    elGetter: $.ASN1Encoder<EncryptionKey>
) {
    if (!_cached_encoder_for_EncryptionKey) {
        _cached_encoder_for_EncryptionKey = $._encodeBitString;
    }
    return _cached_encoder_for_EncryptionKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptionKey */

/* eslint-enable */
