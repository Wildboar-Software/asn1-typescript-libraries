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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION MS_EIT */
/**
 * @summary MS_EIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MS-EIT  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MS_EIT = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MS_EIT */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MS_EIT */
let _cached_decoder_for_MS_EIT: $.ASN1Decoder<MS_EIT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MS_EIT */

/* START_OF_SYMBOL_DEFINITION _decode_MS_EIT */
/**
 * @summary Decodes an ASN.1 element into a(n) MS_EIT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MS_EIT} The decoded data structure.
 */
export function _decode_MS_EIT(el: _Element) {
    if (!_cached_decoder_for_MS_EIT) {
        _cached_decoder_for_MS_EIT = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MS_EIT(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MS_EIT */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MS_EIT */
let _cached_encoder_for_MS_EIT: $.ASN1Encoder<MS_EIT> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MS_EIT */

/* START_OF_SYMBOL_DEFINITION _encode_MS_EIT */
/**
 * @summary Encodes a(n) MS_EIT into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MS_EIT, encoded as an ASN.1 Element.
 */
export function _encode_MS_EIT(value: MS_EIT, elGetter: $.ASN1Encoder<MS_EIT>) {
    if (!_cached_encoder_for_MS_EIT) {
        _cached_encoder_for_MS_EIT = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MS_EIT(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MS_EIT */

/* eslint-enable */
