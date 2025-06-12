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

/* START_OF_SYMBOL_DEFINITION TimeZone */
/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER {unknown(781)}(-780..781)
 * ```
 */
export type TimeZone = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeZone */

/* START_OF_SYMBOL_DEFINITION TimeZone_unknown */
/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const TimeZone_unknown: TimeZone = 781; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeZone_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary TimeZone_unknown
 * @constant
 * @type {number}
 */
export const unknown: TimeZone = TimeZone_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */
let _cached_decoder_for_TimeZone: $.ASN1Decoder<TimeZone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _decode_TimeZone */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeZone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeZone} The decoded data structure.
 */
export function _decode_TimeZone(el: _Element) {
    if (!_cached_decoder_for_TimeZone) {
        _cached_decoder_for_TimeZone = $._decodeInteger;
    }
    return _cached_decoder_for_TimeZone(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */
let _cached_encoder_for_TimeZone: $.ASN1Encoder<TimeZone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _encode_TimeZone */
/**
 * @summary Encodes a(n) TimeZone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeZone, encoded as an ASN.1 Element.
 */
export function _encode_TimeZone(
    value: TimeZone,
    elGetter: $.ASN1Encoder<TimeZone>
) {
    if (!_cached_encoder_for_TimeZone) {
        _cached_encoder_for_TimeZone = $._encodeInteger;
    }
    return _cached_encoder_for_TimeZone(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeZone */

/* eslint-enable */
