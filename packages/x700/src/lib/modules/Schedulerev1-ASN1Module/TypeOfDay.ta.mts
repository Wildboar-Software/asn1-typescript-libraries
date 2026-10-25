/* eslint-disable */
import {
    type INTEGER,
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
 * @summary TypeOfDay
 * @description
 *
 * Day category for type-of-day scheduling and for
 * `currentTypeOfDay`. `workday`(0) and `weekend`(1) are
 * weekday types; `specialDay1`(2) through `specialDay16`(17)
 * are the sixteen special-day categories (e.g. holidays). The
 * rec does not assign a calendar meaning to each special day.
 * A date mapping takes precedence over a weekday mapping.
 * ITU-T Rec. X.746 (02/00)
 * [§7.3.4](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * 8.2.11, A.1.12, A.4.0.2, A.4.15, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfDay  ::=  INTEGER {
 *   workday(0), weekend(1), specialDay1(2), specialDay2(3), specialDay3(4),
 *   specialDay4(5), specialDay5(6), specialDay6(7), specialDay7(8),
 *   specialDay8(9), specialDay9(10), specialDay10(11), specialDay11(12),
 *   specialDay12(13), specialDay13(14), specialDay14(15), specialDay15(16),
 *   specialDay16(17)}
 * ```
 */
export type TypeOfDay = INTEGER;


/**
 * @summary TypeOfDay_workday
 * @description
 *
 * Ordinary working day. Default weekday mapping for Sunday
 * through Friday. ITU-T Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 * @constant
 * @type {number}
 */
export const TypeOfDay_workday = 0 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_workday
 * @description
 *
 * Ordinary working day. Default weekday mapping for Sunday
 * through Friday. ITU-T Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 * @constant
 * @type {number}
 */
export const workday = TypeOfDay_workday satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_weekend
 * @description
 *
 * Weekend day. Default weekday mapping for Saturday. ITU-T
 * Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 * @constant
 * @type {number}
 */
export const TypeOfDay_weekend = 1 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_weekend
 * @description
 *
 * Weekend day. Default weekday mapping for Saturday. ITU-T
 * Rec. X.746 (02/00)
 * [A.4.15](https://www.itu.int/rec/T-REC-X.746-200002-I), A.6.
 * @constant
 * @type {number}
 */
export const weekend = TypeOfDay_weekend satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay1 = 2 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const specialDay1 = TypeOfDay_specialDay1 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay2 = 3 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const specialDay2 = TypeOfDay_specialDay2 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay3 = 4 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const specialDay3 = TypeOfDay_specialDay3 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay4 = 5 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const specialDay4 = TypeOfDay_specialDay4 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay5 = 6 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const specialDay5 = TypeOfDay_specialDay5 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay6 = 7 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const specialDay6 = TypeOfDay_specialDay6 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay7 = 8 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const specialDay7 = TypeOfDay_specialDay7 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay8 = 9 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const specialDay8 = TypeOfDay_specialDay8 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay9 = 10 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const specialDay9 = TypeOfDay_specialDay9 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay10 = 11 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const specialDay10 = TypeOfDay_specialDay10 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay11 = 12 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const specialDay11 = TypeOfDay_specialDay11 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay12 = 13 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const specialDay12 = TypeOfDay_specialDay12 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay13 = 14 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const specialDay13 = TypeOfDay_specialDay13 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay14 = 15 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const specialDay14 = TypeOfDay_specialDay14 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay15 = 16 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const specialDay15 = TypeOfDay_specialDay15 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay16 = 17 satisfies TypeOfDay; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const specialDay16 = TypeOfDay_specialDay16 satisfies TypeOfDay; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TypeOfDay = $._decodeInteger;




export const _encode_TypeOfDay = $._encodeInteger;


/* eslint-enable */
