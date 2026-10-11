/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Day {
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6,
    sunday = 7,
}

/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Day = _enum_for_Day;

/**
 * @summary Day
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Day  ::=  ENUMERATED
 * {
 *     monday(1),
 *     tuesday(2),
 *     wednesday(3),
 *     thursday(4),
 *     friday(5),
 *     saturday(6),
 *     sunday(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Day = _enum_for_Day;

/**
 * @summary Day_monday
 * @constant
 * @type {number}
 */
export
const Day_monday: Day = Day.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: Day = Day.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_tuesday
 * @constant
 * @type {number}
 */
export
const Day_tuesday: Day = Day.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: Day = Day.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_wednesday
 * @constant
 * @type {number}
 */
export
const Day_wednesday: Day = Day.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: Day = Day.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_thursday
 * @constant
 * @type {number}
 */
export
const Day_thursday: Day = Day.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: Day = Day.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_friday
 * @constant
 * @type {number}
 */
export
const Day_friday: Day = Day.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: Day = Day.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_saturday
 * @constant
 * @type {number}
 */
export
const Day_saturday: Day = Day.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: Day = Day.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_sunday
 * @constant
 * @type {number}
 */
export
const Day_sunday: Day = Day.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: Day = Day.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Day: $.ASN1Decoder<Day> = $._decodeEnumerated;

export const _encode_Day: $.ASN1Encoder<Day> = $._encodeEnumerated;


/* eslint-enable */
