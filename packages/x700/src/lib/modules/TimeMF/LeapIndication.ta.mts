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

/* START_OF_SYMBOL_DEFINITION _enum_for_LeapIndication */
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
 * ```@enum {number}
 */
export enum _enum_for_LeapIndication {
    noWarning = 0,
    minuteHas61Seconds = 1,
    minuteHas59Seconds = 2,
    alarmCondition = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LeapIndication */

/* START_OF_SYMBOL_DEFINITION LeapIndication */
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
 * ```@enum {number}
 */
export type LeapIndication = _enum_for_LeapIndication;
/* END_OF_SYMBOL_DEFINITION LeapIndication */

/* START_OF_SYMBOL_DEFINITION LeapIndication */
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
 * ```@enum {number}
 */
export const LeapIndication = _enum_for_LeapIndication;
/* END_OF_SYMBOL_DEFINITION LeapIndication */

/* START_OF_SYMBOL_DEFINITION LeapIndication_noWarning */
/**
 * @summary LeapIndication_noWarning
 * @constant
 * @type {number}
 */
export const LeapIndication_noWarning: LeapIndication =
    LeapIndication.noWarning; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LeapIndication_noWarning */

/* START_OF_SYMBOL_DEFINITION noWarning */
/**
 * @summary noWarning
 * @constant
 * @type {number}
 */
export const noWarning: LeapIndication =
    LeapIndication.noWarning; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noWarning */

/* START_OF_SYMBOL_DEFINITION LeapIndication_minuteHas61Seconds */
/**
 * @summary LeapIndication_minuteHas61Seconds
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LeapIndication_minuteHas61Seconds */

/* START_OF_SYMBOL_DEFINITION minuteHas61Seconds */
/**
 * @summary minuteHas61Seconds
 * @constant
 * @type {number}
 */
export const minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minuteHas61Seconds */

/* START_OF_SYMBOL_DEFINITION LeapIndication_minuteHas59Seconds */
/**
 * @summary LeapIndication_minuteHas59Seconds
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LeapIndication_minuteHas59Seconds */

/* START_OF_SYMBOL_DEFINITION minuteHas59Seconds */
/**
 * @summary minuteHas59Seconds
 * @constant
 * @type {number}
 */
export const minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION minuteHas59Seconds */

/* START_OF_SYMBOL_DEFINITION LeapIndication_alarmCondition */
/**
 * @summary LeapIndication_alarmCondition
 * @constant
 * @type {number}
 */
export const LeapIndication_alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LeapIndication_alarmCondition */

/* START_OF_SYMBOL_DEFINITION alarmCondition */
/**
 * @summary alarmCondition
 * @constant
 * @type {number}
 */
export const alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alarmCondition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LeapIndication */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LeapIndication */

/* START_OF_SYMBOL_DEFINITION _decode_LeapIndication */
export const _decode_LeapIndication = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_LeapIndication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LeapIndication */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LeapIndication */

/* START_OF_SYMBOL_DEFINITION _encode_LeapIndication */
export const _encode_LeapIndication = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_LeapIndication */

/* eslint-enable */
