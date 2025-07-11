/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
 * @constant
 * @type {number}
 */
export const TypeOfDay_workday: TypeOfDay = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_workday
 * @constant
 * @type {number}
 */
export const workday: TypeOfDay = TypeOfDay_workday; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_weekend
 * @constant
 * @type {number}
 */
export const TypeOfDay_weekend: TypeOfDay = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_weekend
 * @constant
 * @type {number}
 */
export const weekend: TypeOfDay = TypeOfDay_weekend; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay1: TypeOfDay = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay1
 * @constant
 * @type {number}
 */
export const specialDay1: TypeOfDay = TypeOfDay_specialDay1; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay2: TypeOfDay = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay2
 * @constant
 * @type {number}
 */
export const specialDay2: TypeOfDay = TypeOfDay_specialDay2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay3: TypeOfDay = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay3
 * @constant
 * @type {number}
 */
export const specialDay3: TypeOfDay = TypeOfDay_specialDay3; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay4: TypeOfDay = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay4
 * @constant
 * @type {number}
 */
export const specialDay4: TypeOfDay = TypeOfDay_specialDay4; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay5: TypeOfDay = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay5
 * @constant
 * @type {number}
 */
export const specialDay5: TypeOfDay = TypeOfDay_specialDay5; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay6: TypeOfDay = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay6
 * @constant
 * @type {number}
 */
export const specialDay6: TypeOfDay = TypeOfDay_specialDay6; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay7: TypeOfDay = 8; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay7
 * @constant
 * @type {number}
 */
export const specialDay7: TypeOfDay = TypeOfDay_specialDay7; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay8: TypeOfDay = 9; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay8
 * @constant
 * @type {number}
 */
export const specialDay8: TypeOfDay = TypeOfDay_specialDay8; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay9: TypeOfDay = 10; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay9
 * @constant
 * @type {number}
 */
export const specialDay9: TypeOfDay = TypeOfDay_specialDay9; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay10: TypeOfDay = 11; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay10
 * @constant
 * @type {number}
 */
export const specialDay10: TypeOfDay = TypeOfDay_specialDay10; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay11: TypeOfDay = 12; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay11
 * @constant
 * @type {number}
 */
export const specialDay11: TypeOfDay = TypeOfDay_specialDay11; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay12: TypeOfDay = 13; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay12
 * @constant
 * @type {number}
 */
export const specialDay12: TypeOfDay = TypeOfDay_specialDay12; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay13: TypeOfDay = 14; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay13
 * @constant
 * @type {number}
 */
export const specialDay13: TypeOfDay = TypeOfDay_specialDay13; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay14: TypeOfDay = 15; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay14
 * @constant
 * @type {number}
 */
export const specialDay14: TypeOfDay = TypeOfDay_specialDay14; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay15: TypeOfDay = 16; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay15
 * @constant
 * @type {number}
 */
export const specialDay15: TypeOfDay = TypeOfDay_specialDay15; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const TypeOfDay_specialDay16: TypeOfDay = 17; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TypeOfDay_specialDay16
 * @constant
 * @type {number}
 */
export const specialDay16: TypeOfDay = TypeOfDay_specialDay16; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TypeOfDay = $._decodeInteger;




export const _encode_TypeOfDay = $._encodeInteger;


/* eslint-enable */
