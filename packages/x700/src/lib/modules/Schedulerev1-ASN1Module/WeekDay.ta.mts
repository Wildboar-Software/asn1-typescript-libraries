/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary WeekDay
 * @description
 *
 * Day of the week in a `weekDayTranslationList` entry.
 * `sunday`(0) … `saturday`(6). The list shall contain exactly
 * one mapping for each weekday. ITU-T Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
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
 * Day of the week in a `weekDayTranslationList` entry.
 * `sunday`(0) … `saturday`(6). The list shall contain exactly
 * one mapping for each weekday. ITU-T Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
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
 * Day of the week in a `weekDayTranslationList` entry.
 * `sunday`(0) … `saturday`(6). The list shall contain exactly
 * one mapping for each weekday. ITU-T Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
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
export const WeekDay_sunday =
    WeekDay.sunday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export const sunday =
    WeekDay.sunday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_monday
 * @constant
 * @type {number}
 */
export const WeekDay_monday =
    WeekDay.monday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary monday
 * @constant
 * @type {number}
 */
export const monday =
    WeekDay.monday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_tuesday
 * @constant
 * @type {number}
 */
export const WeekDay_tuesday =
    WeekDay.tuesday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export const tuesday =
    WeekDay.tuesday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_wednesday
 * @constant
 * @type {number}
 */
export const WeekDay_wednesday =
    WeekDay.wednesday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export const wednesday =
    WeekDay.wednesday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_thursday
 * @constant
 * @type {number}
 */
export const WeekDay_thursday =
    WeekDay.thursday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export const thursday =
    WeekDay.thursday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_friday
 * @constant
 * @type {number}
 */
export const WeekDay_friday =
    WeekDay.friday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary friday
 * @constant
 * @type {number}
 */
export const friday =
    WeekDay.friday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary WeekDay_saturday
 * @constant
 * @type {number}
 */
export const WeekDay_saturday =
    WeekDay.saturday satisfies WeekDay; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export const saturday =
    WeekDay.saturday satisfies WeekDay; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_WeekDay(el: _Element): WeekDay {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case WeekDay.sunday: return WeekDay.sunday;
        case WeekDay.monday: return WeekDay.monday;
        case WeekDay.tuesday: return WeekDay.tuesday;
        case WeekDay.wednesday: return WeekDay.wednesday;
        case WeekDay.thursday: return WeekDay.thursday;
        case WeekDay.friday: return WeekDay.friday;
        case WeekDay.saturday: return WeekDay.saturday;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for WeekDay.',
                el,
            );
    }
}




export const _encode_WeekDay: $.ASN1Encoder<WeekDay> = $._encodeEnumerated as $.ASN1Encoder<WeekDay>;


/* eslint-enable */
