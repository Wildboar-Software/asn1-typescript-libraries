/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DayOfTheWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayOfTheWeek  ::=  ENUMERATED {
 *    allDays      ( 0 ),
 *    sunday       ( 1 ),
 *    monday       ( 2 ),
 *    tuesday      ( 3 ),
 *    wednesday    ( 4 ),
 *    thursday     ( 5 ),
 *    friday       ( 6 ),
 *    saturday     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DayOfTheWeek {
    allDays = 0,
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}

/**
 * @summary DayOfTheWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayOfTheWeek  ::=  ENUMERATED {
 *    allDays      ( 0 ),
 *    sunday       ( 1 ),
 *    monday       ( 2 ),
 *    tuesday      ( 3 ),
 *    wednesday    ( 4 ),
 *    thursday     ( 5 ),
 *    friday       ( 6 ),
 *    saturday     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type DayOfTheWeek = _enum_for_DayOfTheWeek;

/**
 * @summary DayOfTheWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayOfTheWeek  ::=  ENUMERATED {
 *    allDays      ( 0 ),
 *    sunday       ( 1 ),
 *    monday       ( 2 ),
 *    tuesday      ( 3 ),
 *    wednesday    ( 4 ),
 *    thursday     ( 5 ),
 *    friday       ( 6 ),
 *    saturday     ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const DayOfTheWeek: typeof _enum_for_DayOfTheWeek = _enum_for_DayOfTheWeek;

/**
 * @summary DayOfTheWeek_allDays
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_allDays: _enum_for_DayOfTheWeek.allDays = DayOfTheWeek.allDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allDays
 * @constant
 * @type {number}
 */
export
const allDays: _enum_for_DayOfTheWeek.allDays = DayOfTheWeek.allDays; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_sunday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_sunday: _enum_for_DayOfTheWeek.sunday = DayOfTheWeek.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: _enum_for_DayOfTheWeek.sunday = DayOfTheWeek.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_monday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_monday: _enum_for_DayOfTheWeek.monday = DayOfTheWeek.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: _enum_for_DayOfTheWeek.monday = DayOfTheWeek.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_tuesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_tuesday: _enum_for_DayOfTheWeek.tuesday = DayOfTheWeek.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: _enum_for_DayOfTheWeek.tuesday = DayOfTheWeek.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_wednesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_wednesday: _enum_for_DayOfTheWeek.wednesday = DayOfTheWeek.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: _enum_for_DayOfTheWeek.wednesday = DayOfTheWeek.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_thursday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_thursday: _enum_for_DayOfTheWeek.thursday = DayOfTheWeek.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: _enum_for_DayOfTheWeek.thursday = DayOfTheWeek.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_friday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_friday: _enum_for_DayOfTheWeek.friday = DayOfTheWeek.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: _enum_for_DayOfTheWeek.friday = DayOfTheWeek.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_saturday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_saturday: _enum_for_DayOfTheWeek.saturday = DayOfTheWeek.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: _enum_for_DayOfTheWeek.saturday = DayOfTheWeek.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DayOfTheWeek: $.ASN1Decoder<DayOfTheWeek> = $._decodeEnumerated;

export
const _encode_DayOfTheWeek: $.ASN1Encoder<DayOfTheWeek> = $._encodeEnumerated;

/* eslint-enable */
