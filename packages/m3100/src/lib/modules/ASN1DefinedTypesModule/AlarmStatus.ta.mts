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

/* START_OF_SYMBOL_DEFINITION _enum_for_AlarmStatus */
/**
 * @summary AlarmStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmStatus  ::=  ENUMERATED {
 *   cleared(0), activeReportable-Indeterminate(1), activeReportable-Warning(2),
 *   activeReportable-Minor(3), activeReportable-Major(4),
 *   activeReportable-Critical(5), activePending(6)}
 * ```@enum {number}
 */
export enum _enum_for_AlarmStatus {
    cleared = 0,
    activeReportable_Indeterminate = 1,
    activeReportable_Warning = 2,
    activeReportable_Minor = 3,
    activeReportable_Major = 4,
    activeReportable_Critical = 5,
    activePending = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION AlarmStatus */
/**
 * @summary AlarmStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmStatus  ::=  ENUMERATED {
 *   cleared(0), activeReportable-Indeterminate(1), activeReportable-Warning(2),
 *   activeReportable-Minor(3), activeReportable-Major(4),
 *   activeReportable-Critical(5), activePending(6)}
 * ```@enum {number}
 */
export type AlarmStatus = _enum_for_AlarmStatus;
/* END_OF_SYMBOL_DEFINITION AlarmStatus */

/* START_OF_SYMBOL_DEFINITION AlarmStatus */
/**
 * @summary AlarmStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmStatus  ::=  ENUMERATED {
 *   cleared(0), activeReportable-Indeterminate(1), activeReportable-Warning(2),
 *   activeReportable-Minor(3), activeReportable-Major(4),
 *   activeReportable-Critical(5), activePending(6)}
 * ```@enum {number}
 */
export const AlarmStatus = _enum_for_AlarmStatus;
/* END_OF_SYMBOL_DEFINITION AlarmStatus */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_cleared */
/**
 * @summary AlarmStatus_cleared
 * @constant
 * @type {number}
 */
export const AlarmStatus_cleared: AlarmStatus =
    AlarmStatus.cleared; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_cleared */

/* START_OF_SYMBOL_DEFINITION cleared */
/**
 * @summary cleared
 * @constant
 * @type {number}
 */
export const cleared: AlarmStatus =
    AlarmStatus.cleared; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cleared */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Indeterminate */
/**
 * @summary AlarmStatus_activeReportable_Indeterminate
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Indeterminate: AlarmStatus =
    AlarmStatus.activeReportable_Indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Indeterminate */

/* START_OF_SYMBOL_DEFINITION activeReportable_Indeterminate */
/**
 * @summary activeReportable_Indeterminate
 * @constant
 * @type {number}
 */
export const activeReportable_Indeterminate: AlarmStatus =
    AlarmStatus.activeReportable_Indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activeReportable_Indeterminate */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Warning */
/**
 * @summary AlarmStatus_activeReportable_Warning
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Warning: AlarmStatus =
    AlarmStatus.activeReportable_Warning; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Warning */

/* START_OF_SYMBOL_DEFINITION activeReportable_Warning */
/**
 * @summary activeReportable_Warning
 * @constant
 * @type {number}
 */
export const activeReportable_Warning: AlarmStatus =
    AlarmStatus.activeReportable_Warning; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activeReportable_Warning */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Minor */
/**
 * @summary AlarmStatus_activeReportable_Minor
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Minor: AlarmStatus =
    AlarmStatus.activeReportable_Minor; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Minor */

/* START_OF_SYMBOL_DEFINITION activeReportable_Minor */
/**
 * @summary activeReportable_Minor
 * @constant
 * @type {number}
 */
export const activeReportable_Minor: AlarmStatus =
    AlarmStatus.activeReportable_Minor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activeReportable_Minor */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Major */
/**
 * @summary AlarmStatus_activeReportable_Major
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Major: AlarmStatus =
    AlarmStatus.activeReportable_Major; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Major */

/* START_OF_SYMBOL_DEFINITION activeReportable_Major */
/**
 * @summary activeReportable_Major
 * @constant
 * @type {number}
 */
export const activeReportable_Major: AlarmStatus =
    AlarmStatus.activeReportable_Major; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activeReportable_Major */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Critical */
/**
 * @summary AlarmStatus_activeReportable_Critical
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Critical: AlarmStatus =
    AlarmStatus.activeReportable_Critical; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activeReportable_Critical */

/* START_OF_SYMBOL_DEFINITION activeReportable_Critical */
/**
 * @summary activeReportable_Critical
 * @constant
 * @type {number}
 */
export const activeReportable_Critical: AlarmStatus =
    AlarmStatus.activeReportable_Critical; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activeReportable_Critical */

/* START_OF_SYMBOL_DEFINITION AlarmStatus_activePending */
/**
 * @summary AlarmStatus_activePending
 * @constant
 * @type {number}
 */
export const AlarmStatus_activePending: AlarmStatus =
    AlarmStatus.activePending; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AlarmStatus_activePending */

/* START_OF_SYMBOL_DEFINITION activePending */
/**
 * @summary activePending
 * @constant
 * @type {number}
 */
export const activePending: AlarmStatus =
    AlarmStatus.activePending; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION activePending */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AlarmStatus */
export const _decode_AlarmStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlarmStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AlarmStatus */
export const _encode_AlarmStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AlarmStatus */

/* eslint-enable */
