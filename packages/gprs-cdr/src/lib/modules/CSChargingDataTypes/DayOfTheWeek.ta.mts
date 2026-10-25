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
const DayOfTheWeek_allDays = DayOfTheWeek.allDays satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allDays
 * @constant
 * @type {number}
 */
export
const allDays = DayOfTheWeek.allDays satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_sunday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_sunday = DayOfTheWeek.sunday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sunday
 * @constant
 * @type {number}
 */
export
const sunday = DayOfTheWeek.sunday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_monday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_monday = DayOfTheWeek.monday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monday
 * @constant
 * @type {number}
 */
export
const monday = DayOfTheWeek.monday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_tuesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_tuesday = DayOfTheWeek.tuesday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tuesday
 * @constant
 * @type {number}
 */
export
const tuesday = DayOfTheWeek.tuesday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_wednesday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_wednesday = DayOfTheWeek.wednesday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wednesday
 * @constant
 * @type {number}
 */
export
const wednesday = DayOfTheWeek.wednesday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_thursday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_thursday = DayOfTheWeek.thursday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thursday
 * @constant
 * @type {number}
 */
export
const thursday = DayOfTheWeek.thursday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_friday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_friday = DayOfTheWeek.friday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary friday
 * @constant
 * @type {number}
 */
export
const friday = DayOfTheWeek.friday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DayOfTheWeek_saturday
 * @constant
 * @type {number}
 */
export
const DayOfTheWeek_saturday = DayOfTheWeek.saturday satisfies DayOfTheWeek; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary saturday
 * @constant
 * @type {number}
 */
export
const saturday = DayOfTheWeek.saturday satisfies DayOfTheWeek; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DayOfTheWeek: $.ASN1Decoder<DayOfTheWeek> = $._decodeEnumerated;

export
const _encode_DayOfTheWeek: $.ASN1Encoder<DayOfTheWeek> = $._encodeEnumerated;

/* eslint-enable */
