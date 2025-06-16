/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary LeapIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_LeapIndication {
    noWarning = 0,
    minuteHas61Seconds = 1,
    minuteHas59Seconds = 2,
    alarmCondition = 3,
}

/**
 * @summary LeapIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export type LeapIndication = _enum_for_LeapIndication;

/**
 * @summary LeapIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export const LeapIndication = _enum_for_LeapIndication;

/**
 * @summary LeapIndication_noWarning
 * @constant
 * @type {number}
 */
export const LeapIndication_noWarning: LeapIndication =
    LeapIndication.noWarning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noWarning
 * @constant
 * @type {number}
 */
export const noWarning: LeapIndication =
    LeapIndication.noWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_minuteHas61Seconds
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minuteHas61Seconds
 * @constant
 * @type {number}
 */
export const minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_minuteHas59Seconds
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minuteHas59Seconds
 * @constant
 * @type {number}
 */
export const minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_alarmCondition
 * @constant
 * @type {number}
 */
export const LeapIndication_alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alarmCondition
 * @constant
 * @type {number}
 */
export const alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_LeapIndication = $._decodeEnumerated;


export const _encode_LeapIndication = $._encodeEnumerated;


/* eslint-enable */
