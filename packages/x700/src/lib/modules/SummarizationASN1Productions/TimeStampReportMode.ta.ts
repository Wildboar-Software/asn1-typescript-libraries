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

/* START_OF_SYMBOL_DEFINITION _enum_for_TimeStampReportMode */
/**
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```@enum {number}
 */
export enum _enum_for_TimeStampReportMode {
    timeStampingOff = 0,
    globalTimeStampOnly = 1,
    individualTimeStamping = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode */
/**
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```@enum {number}
 */
export type TimeStampReportMode = _enum_for_TimeStampReportMode;
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode */
/**
 * @summary TimeStampReportMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReportMode  ::=  ENUMERATED {
 *   timeStampingOff(0), globalTimeStampOnly(1), individualTimeStamping(2)
 * }
 * ```@enum {number}
 */
export const TimeStampReportMode = _enum_for_TimeStampReportMode;
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_timeStampingOff */
/**
 * @summary TimeStampReportMode_timeStampingOff
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_timeStampingOff */

/* START_OF_SYMBOL_DEFINITION timeStampingOff */
/**
 * @summary timeStampingOff
 * @constant
 * @type {number}
 */
export const timeStampingOff: TimeStampReportMode =
    TimeStampReportMode.timeStampingOff; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION timeStampingOff */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_globalTimeStampOnly */
/**
 * @summary TimeStampReportMode_globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_globalTimeStampOnly */

/* START_OF_SYMBOL_DEFINITION globalTimeStampOnly */
/**
 * @summary globalTimeStampOnly
 * @constant
 * @type {number}
 */
export const globalTimeStampOnly: TimeStampReportMode =
    TimeStampReportMode.globalTimeStampOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION globalTimeStampOnly */

/* START_OF_SYMBOL_DEFINITION TimeStampReportMode_individualTimeStamping */
/**
 * @summary TimeStampReportMode_individualTimeStamping
 * @constant
 * @type {number}
 */
export const TimeStampReportMode_individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReportMode_individualTimeStamping */

/* START_OF_SYMBOL_DEFINITION individualTimeStamping */
/**
 * @summary individualTimeStamping
 * @constant
 * @type {number}
 */
export const individualTimeStamping: TimeStampReportMode =
    TimeStampReportMode.individualTimeStamping; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION individualTimeStamping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReportMode */
let _cached_decoder_for_TimeStampReportMode: $.ASN1Decoder<TimeStampReportMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampReportMode */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampReportMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampReportMode} The decoded data structure.
 */
export function _decode_TimeStampReportMode(el: _Element) {
    if (!_cached_decoder_for_TimeStampReportMode) {
        _cached_decoder_for_TimeStampReportMode = $._decodeEnumerated;
    }
    return _cached_decoder_for_TimeStampReportMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReportMode */
let _cached_encoder_for_TimeStampReportMode: $.ASN1Encoder<TimeStampReportMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReportMode */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampReportMode */
/**
 * @summary Encodes a(n) TimeStampReportMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampReportMode, encoded as an ASN.1 Element.
 */
export function _encode_TimeStampReportMode(
    value: TimeStampReportMode,
    elGetter: $.ASN1Encoder<TimeStampReportMode>
) {
    if (!_cached_encoder_for_TimeStampReportMode) {
        _cached_encoder_for_TimeStampReportMode = $._encodeEnumerated;
    }
    return _cached_encoder_for_TimeStampReportMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampReportMode */

/* eslint-enable */
