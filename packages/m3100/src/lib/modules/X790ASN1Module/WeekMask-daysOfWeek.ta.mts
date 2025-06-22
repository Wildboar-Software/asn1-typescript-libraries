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
 * @summary WeekMask_daysOfWeek
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekMask-daysOfWeek ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type WeekMask_daysOfWeek = BIT_STRING;


/**
 * @summary WeekMask_daysOfWeek_sunday
 * @constant
 */
export const WeekMask_daysOfWeek_sunday: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary sunday
 * @constant
 */
export const sunday: number = WeekMask_daysOfWeek_sunday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_monday
 * @constant
 */
export const WeekMask_daysOfWeek_monday: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary monday
 * @constant
 */
export const monday: number = WeekMask_daysOfWeek_monday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_tuesday
 * @constant
 */
export const WeekMask_daysOfWeek_tuesday: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary tuesday
 * @constant
 */
export const tuesday: number = WeekMask_daysOfWeek_tuesday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_wednesday
 * @constant
 */
export const WeekMask_daysOfWeek_wednesday: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary wednesday
 * @constant
 */
export const wednesday: number = WeekMask_daysOfWeek_wednesday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_thursday
 * @constant
 */
export const WeekMask_daysOfWeek_thursday: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary thursday
 * @constant
 */
export const thursday: number = WeekMask_daysOfWeek_thursday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_friday
 * @constant
 */
export const WeekMask_daysOfWeek_friday: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary friday
 * @constant
 */
export const friday: number = WeekMask_daysOfWeek_friday; /* SHORT_NAMED_BIT */


/**
 * @summary WeekMask_daysOfWeek_saturday
 * @constant
 */
export const WeekMask_daysOfWeek_saturday: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary saturday
 * @constant
 */
export const saturday: number = WeekMask_daysOfWeek_saturday; /* SHORT_NAMED_BIT */




export const _decode_WeekMask_daysOfWeek = $._decodeBitString;




export const _encode_WeekMask_daysOfWeek = $._encodeBitString;


/* eslint-enable */
