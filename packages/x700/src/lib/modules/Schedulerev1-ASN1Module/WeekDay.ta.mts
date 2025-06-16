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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


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
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
 */
export type WeekDay = _enum_for_WeekDay;


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
 * ```
 *
 * @enum {number}
 */
export const WeekDay = _enum_for_WeekDay;


/**
 * @summary WeekDay_sunday
 * @constant
 * @type {number}
 */
export const WeekDay_sunday: WeekDay =
    WeekDay.sunday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export const sunday: WeekDay =
    WeekDay.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_monday
 * @constant
 * @type {number}
 */
export const WeekDay_monday: WeekDay =
    WeekDay.monday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary monday
 * @constant
 * @type {number}
 */
export const monday: WeekDay =
    WeekDay.monday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_tuesday
 * @constant
 * @type {number}
 */
export const WeekDay_tuesday: WeekDay =
    WeekDay.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export const tuesday: WeekDay =
    WeekDay.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_wednesday
 * @constant
 * @type {number}
 */
export const WeekDay_wednesday: WeekDay =
    WeekDay.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export const wednesday: WeekDay =
    WeekDay.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_thursday
 * @constant
 * @type {number}
 */
export const WeekDay_thursday: WeekDay =
    WeekDay.thursday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export const thursday: WeekDay =
    WeekDay.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_friday
 * @constant
 * @type {number}
 */
export const WeekDay_friday: WeekDay =
    WeekDay.friday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary friday
 * @constant
 * @type {number}
 */
export const friday: WeekDay =
    WeekDay.friday; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_saturday
 * @constant
 * @type {number}
 */
export const WeekDay_saturday: WeekDay =
    WeekDay.saturday; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export const saturday: WeekDay =
    WeekDay.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_WeekDay = $._decodeEnumerated;




export const _encode_WeekDay = $._encodeEnumerated;


/* eslint-enable */
