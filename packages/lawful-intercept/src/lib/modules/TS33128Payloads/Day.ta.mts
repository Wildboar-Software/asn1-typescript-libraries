/* eslint-disable */
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
const Day: typeof _enum_for_Day = _enum_for_Day;

/**
 * @summary Day_monday
 * @constant
 * @type {number}
 */
export
const Day_monday: _enum_for_Day.monday = Day.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: _enum_for_Day.monday = Day.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_tuesday
 * @constant
 * @type {number}
 */
export
const Day_tuesday: _enum_for_Day.tuesday = Day.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: _enum_for_Day.tuesday = Day.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_wednesday
 * @constant
 * @type {number}
 */
export
const Day_wednesday: _enum_for_Day.wednesday = Day.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: _enum_for_Day.wednesday = Day.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_thursday
 * @constant
 * @type {number}
 */
export
const Day_thursday: _enum_for_Day.thursday = Day.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: _enum_for_Day.thursday = Day.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_friday
 * @constant
 * @type {number}
 */
export
const Day_friday: _enum_for_Day.friday = Day.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: _enum_for_Day.friday = Day.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_saturday
 * @constant
 * @type {number}
 */
export
const Day_saturday: _enum_for_Day.saturday = Day.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: _enum_for_Day.saturday = Day.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Day_sunday
 * @constant
 * @type {number}
 */
export
const Day_sunday: _enum_for_Day.sunday = Day.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: _enum_for_Day.sunday = Day.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Day: $.ASN1Decoder<Day> = $._decodeEnumerated;
export const _encode_Day: $.ASN1Encoder<Day> = $._encodeEnumerated;


/* eslint-enable */
