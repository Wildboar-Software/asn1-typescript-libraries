/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary DaysOfWeek
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DaysOfWeek  ::=  BIT STRING {
 *   sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4), friday(5),
 *   saturday(6)}(SIZE (7))
 * ```
 */
export type DaysOfWeek = BIT_STRING;


/**
 * @summary DaysOfWeek_sunday
 * @constant
 */
export const DaysOfWeek_sunday: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary sunday
 * @constant
 */
export const sunday: number = DaysOfWeek_sunday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_monday
 * @constant
 */
export const DaysOfWeek_monday: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary monday
 * @constant
 */
export const monday: number = DaysOfWeek_monday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_tuesday
 * @constant
 */
export const DaysOfWeek_tuesday: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary tuesday
 * @constant
 */
export const tuesday: number = DaysOfWeek_tuesday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_wednesday
 * @constant
 */
export const DaysOfWeek_wednesday: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary wednesday
 * @constant
 */
export const wednesday: number = DaysOfWeek_wednesday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_thursday
 * @constant
 */
export const DaysOfWeek_thursday: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary thursday
 * @constant
 */
export const thursday: number = DaysOfWeek_thursday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_friday
 * @constant
 */
export const DaysOfWeek_friday: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary friday
 * @constant
 */
export const friday: number = DaysOfWeek_friday; /* SHORT_NAMED_BIT */


/**
 * @summary DaysOfWeek_saturday
 * @constant
 */
export const DaysOfWeek_saturday: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary saturday
 * @constant
 */
export const saturday: number = DaysOfWeek_saturday; /* SHORT_NAMED_BIT */




export const _decode_DaysOfWeek = $._decodeBitString;




export const _encode_DaysOfWeek = $._encodeBitString;


/* eslint-enable */
