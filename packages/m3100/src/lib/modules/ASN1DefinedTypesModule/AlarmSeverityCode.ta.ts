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

/* START_OF_SYMBOL_DEFINITION _enum_for_AlarmSeverityCode */
/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```@enum {number}
 */
export enum _enum_for_AlarmSeverityCode {
    non_alarmed = 0,
    minor = 1,
    major = 2,
    critical = 3,
    warning = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode */
/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```@enum {number}
 */
export type AlarmSeverityCode = _enum_for_AlarmSeverityCode;
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode */
/**
 * @summary AlarmSeverityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmSeverityCode  ::=  ENUMERATED {
 *   non-alarmed(0), minor(1), major(2), critical(3), warning(4)}
 * ```@enum {number}
 */
export const AlarmSeverityCode = _enum_for_AlarmSeverityCode;
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode_non_alarmed */
/**
 * @summary AlarmSeverityCode_non_alarmed
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_non_alarmed: AlarmSeverityCode =
    AlarmSeverityCode.non_alarmed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode_non_alarmed */

/* START_OF_SYMBOL_DEFINITION non_alarmed */
/**
 * @summary non_alarmed
 * @constant
 * @type {number}
 */
export const non_alarmed: AlarmSeverityCode =
    AlarmSeverityCode.non_alarmed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_alarmed */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode_minor */
/**
 * @summary AlarmSeverityCode_minor
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_minor: AlarmSeverityCode =
    AlarmSeverityCode.minor; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode_minor */

/* START_OF_SYMBOL_DEFINITION minor */
/**
 * @summary minor
 * @constant
 * @type {number}
 */
export const minor: AlarmSeverityCode =
    AlarmSeverityCode.minor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minor */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode_major */
/**
 * @summary AlarmSeverityCode_major
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_major: AlarmSeverityCode =
    AlarmSeverityCode.major; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode_major */

/* START_OF_SYMBOL_DEFINITION major */
/**
 * @summary major
 * @constant
 * @type {number}
 */
export const major: AlarmSeverityCode =
    AlarmSeverityCode.major; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION major */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode_critical */
/**
 * @summary AlarmSeverityCode_critical
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_critical: AlarmSeverityCode =
    AlarmSeverityCode.critical; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode_critical */

/* START_OF_SYMBOL_DEFINITION critical */
/**
 * @summary critical
 * @constant
 * @type {number}
 */
export const critical: AlarmSeverityCode =
    AlarmSeverityCode.critical; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION critical */

/* START_OF_SYMBOL_DEFINITION AlarmSeverityCode_warning */
/**
 * @summary AlarmSeverityCode_warning
 * @constant
 * @type {number}
 */
export const AlarmSeverityCode_warning: AlarmSeverityCode =
    AlarmSeverityCode.warning; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmSeverityCode_warning */

/* START_OF_SYMBOL_DEFINITION warning */
/**
 * @summary warning
 * @constant
 * @type {number}
 */
export const warning: AlarmSeverityCode =
    AlarmSeverityCode.warning; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION warning */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityCode */
let _cached_decoder_for_AlarmSeverityCode: $.ASN1Decoder<AlarmSeverityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmSeverityCode */
/**
 * @summary Decodes an ASN.1 element into a(n) AlarmSeverityCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmSeverityCode} The decoded data structure.
 */
export function _decode_AlarmSeverityCode(el: _Element) {
    if (!_cached_decoder_for_AlarmSeverityCode) {
        _cached_decoder_for_AlarmSeverityCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_AlarmSeverityCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityCode */
let _cached_encoder_for_AlarmSeverityCode: $.ASN1Encoder<AlarmSeverityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmSeverityCode */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmSeverityCode */
/**
 * @summary Encodes a(n) AlarmSeverityCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmSeverityCode, encoded as an ASN.1 Element.
 */
export function _encode_AlarmSeverityCode(
    value: AlarmSeverityCode,
    elGetter: $.ASN1Encoder<AlarmSeverityCode>
) {
    if (!_cached_encoder_for_AlarmSeverityCode) {
        _cached_encoder_for_AlarmSeverityCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_AlarmSeverityCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlarmSeverityCode */

/* eslint-enable */
