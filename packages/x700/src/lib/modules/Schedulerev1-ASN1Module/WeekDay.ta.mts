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

/* START_OF_SYMBOL_DEFINITION _enum_for_WeekDay */
/**
 * @summary WeekDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekDay  ::=  ENUMERATED {
 *   sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5),
 *   saturday(6)}
 * ```@enum {number}
 */
export enum _enum_for_WeekDay {
    sunday = 0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_WeekDay */

/* START_OF_SYMBOL_DEFINITION WeekDay */
/**
 * @summary WeekDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekDay  ::=  ENUMERATED {
 *   sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5),
 *   saturday(6)}
 * ```@enum {number}
 */
export type WeekDay = _enum_for_WeekDay;
/* END_OF_SYMBOL_DEFINITION WeekDay */

/* START_OF_SYMBOL_DEFINITION WeekDay */
/**
 * @summary WeekDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekDay  ::=  ENUMERATED {
 *   sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5),
 *   saturday(6)}
 * ```@enum {number}
 */
export const WeekDay = _enum_for_WeekDay;
/* END_OF_SYMBOL_DEFINITION WeekDay */

/* START_OF_SYMBOL_DEFINITION WeekDay_sunday */
/**
 * @summary WeekDay_sunday
 * @constant
 * @type {number}
 */
export const WeekDay_sunday: WeekDay =
    WeekDay.sunday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_sunday */

/* START_OF_SYMBOL_DEFINITION sunday */
/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export const sunday: WeekDay =
    WeekDay.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sunday */

/* START_OF_SYMBOL_DEFINITION WeekDay_monday */
/**
 * @summary WeekDay_monday
 * @constant
 * @type {number}
 */
export const WeekDay_monday: WeekDay =
    WeekDay.monday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_monday */

/* START_OF_SYMBOL_DEFINITION monday */
/**
 * @summary monday
 * @constant
 * @type {number}
 */
export const monday: WeekDay =
    WeekDay.monday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION monday */

/* START_OF_SYMBOL_DEFINITION WeekDay_tuesday */
/**
 * @summary WeekDay_tuesday
 * @constant
 * @type {number}
 */
export const WeekDay_tuesday: WeekDay =
    WeekDay.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_tuesday */

/* START_OF_SYMBOL_DEFINITION tuesday */
/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export const tuesday: WeekDay =
    WeekDay.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tuesday */

/* START_OF_SYMBOL_DEFINITION WeekDay_wednesday */
/**
 * @summary WeekDay_wednesday
 * @constant
 * @type {number}
 */
export const WeekDay_wednesday: WeekDay =
    WeekDay.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_wednesday */

/* START_OF_SYMBOL_DEFINITION wednesday */
/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export const wednesday: WeekDay =
    WeekDay.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wednesday */

/* START_OF_SYMBOL_DEFINITION WeekDay_thursday */
/**
 * @summary WeekDay_thursday
 * @constant
 * @type {number}
 */
export const WeekDay_thursday: WeekDay =
    WeekDay.thursday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_thursday */

/* START_OF_SYMBOL_DEFINITION thursday */
/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export const thursday: WeekDay =
    WeekDay.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION thursday */

/* START_OF_SYMBOL_DEFINITION WeekDay_friday */
/**
 * @summary WeekDay_friday
 * @constant
 * @type {number}
 */
export const WeekDay_friday: WeekDay =
    WeekDay.friday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_friday */

/* START_OF_SYMBOL_DEFINITION friday */
/**
 * @summary friday
 * @constant
 * @type {number}
 */
export const friday: WeekDay =
    WeekDay.friday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION friday */

/* START_OF_SYMBOL_DEFINITION WeekDay_saturday */
/**
 * @summary WeekDay_saturday
 * @constant
 * @type {number}
 */
export const WeekDay_saturday: WeekDay =
    WeekDay.saturday; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WeekDay_saturday */

/* START_OF_SYMBOL_DEFINITION saturday */
/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export const saturday: WeekDay =
    WeekDay.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION saturday */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDay */
let _cached_decoder_for_WeekDay: $.ASN1Decoder<WeekDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDay */

/* START_OF_SYMBOL_DEFINITION _decode_WeekDay */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekDay} The decoded data structure.
 */
export function _decode_WeekDay(el: _Element) {
    if (!_cached_decoder_for_WeekDay) {
        _cached_decoder_for_WeekDay = $._decodeEnumerated;
    }
    return _cached_decoder_for_WeekDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDay */
let _cached_encoder_for_WeekDay: $.ASN1Encoder<WeekDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDay */

/* START_OF_SYMBOL_DEFINITION _encode_WeekDay */
/**
 * @summary Encodes a(n) WeekDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekDay, encoded as an ASN.1 Element.
 */
export function _encode_WeekDay(
    value: WeekDay,
    elGetter: $.ASN1Encoder<WeekDay>
) {
    if (!_cached_encoder_for_WeekDay) {
        _cached_encoder_for_WeekDay = $._encodeEnumerated;
    }
    return _cached_encoder_for_WeekDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekDay */

/* eslint-enable */
