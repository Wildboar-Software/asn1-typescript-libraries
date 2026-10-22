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
const DayOfTheWeek = _enum_for_DayOfTheWeek;

/**
 * @summary DayOfTheWeek_allDays
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_allDays: DayOfTheWeek = DayOfTheWeek.allDays; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allDays
 * @constant
 * @type {number}
 */
export
const allDays: DayOfTheWeek = DayOfTheWeek.allDays; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_sunday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_sunday: DayOfTheWeek = DayOfTheWeek.sunday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday: DayOfTheWeek = DayOfTheWeek.sunday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_monday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_monday: DayOfTheWeek = DayOfTheWeek.monday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday: DayOfTheWeek = DayOfTheWeek.monday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_tuesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_tuesday: DayOfTheWeek = DayOfTheWeek.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday: DayOfTheWeek = DayOfTheWeek.tuesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_wednesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_wednesday: DayOfTheWeek = DayOfTheWeek.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday: DayOfTheWeek = DayOfTheWeek.wednesday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_thursday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_thursday: DayOfTheWeek = DayOfTheWeek.thursday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday: DayOfTheWeek = DayOfTheWeek.thursday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_friday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_friday: DayOfTheWeek = DayOfTheWeek.friday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday: DayOfTheWeek = DayOfTheWeek.friday; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_saturday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_saturday: DayOfTheWeek = DayOfTheWeek.saturday; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday: DayOfTheWeek = DayOfTheWeek.saturday; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DayOfTheWeek: $.ASN1Decoder<DayOfTheWeek> = $._decodeEnumerated;

export
const _encode_DayOfTheWeek: $.ASN1Encoder<DayOfTheWeek> = $._encodeEnumerated;

/* eslint-enable */
