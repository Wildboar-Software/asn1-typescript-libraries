/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AlarmStatus
 * @description
 *
 * Duplicated from ITU-T Rec. M.3100 `ASN1DefinedTypesModule` so this package
 * does not depend on `@wildboar/m3100`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmStatus ::= ENUMERATED {
 *   cleared(0), activeReportable-Indeterminate(1), activeReportable-Warning(2),
 *   activeReportable-Minor(3), activeReportable-Major(4),
 *   activeReportable-Critical(5), activePending(6)}
 * ```
 *
 * @enum {number}
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

/**
 * @summary AlarmStatus
 * @enum {number}
 */
export type AlarmStatus = _enum_for_AlarmStatus;

/**
 * @summary AlarmStatus
 * @enum {number}
 */
export const AlarmStatus = _enum_for_AlarmStatus;

/**
 * @summary AlarmStatus_cleared
 * @constant
 */
export const AlarmStatus_cleared: AlarmStatus = AlarmStatus.cleared;

/**
 * @summary cleared
 * @constant
 */
export const cleared: AlarmStatus = AlarmStatus.cleared;

/**
 * @summary AlarmStatus_activeReportable_Indeterminate
 * @constant
 */
export const AlarmStatus_activeReportable_Indeterminate: AlarmStatus =
    AlarmStatus.activeReportable_Indeterminate;

/**
 * @summary activeReportable_Indeterminate
 * @constant
 */
export const activeReportable_Indeterminate: AlarmStatus =
    AlarmStatus.activeReportable_Indeterminate;

/**
 * @summary AlarmStatus_activeReportable_Warning
 * @constant
 */
export const AlarmStatus_activeReportable_Warning: AlarmStatus =
    AlarmStatus.activeReportable_Warning;

/**
 * @summary activeReportable_Warning
 * @constant
 */
export const activeReportable_Warning: AlarmStatus =
    AlarmStatus.activeReportable_Warning;

/**
 * @summary AlarmStatus_activeReportable_Minor
 * @constant
 */
export const AlarmStatus_activeReportable_Minor: AlarmStatus =
    AlarmStatus.activeReportable_Minor;

/**
 * @summary activeReportable_Minor
 * @constant
 */
export const activeReportable_Minor: AlarmStatus =
    AlarmStatus.activeReportable_Minor;

/**
 * @summary AlarmStatus_activeReportable_Major
 * @constant
 */
export const AlarmStatus_activeReportable_Major: AlarmStatus =
    AlarmStatus.activeReportable_Major;

/**
 * @summary activeReportable_Major
 * @constant
 */
export const activeReportable_Major: AlarmStatus =
    AlarmStatus.activeReportable_Major;

/**
 * @summary AlarmStatus_activeReportable_Critical
 * @constant
 */
export const AlarmStatus_activeReportable_Critical: AlarmStatus =
    AlarmStatus.activeReportable_Critical;

/**
 * @summary activeReportable_Critical
 * @constant
 */
export const activeReportable_Critical: AlarmStatus =
    AlarmStatus.activeReportable_Critical;

/**
 * @summary AlarmStatus_activePending
 * @constant
 */
export const AlarmStatus_activePending: AlarmStatus = AlarmStatus.activePending;

/**
 * @summary activePending
 * @constant
 */
export const activePending: AlarmStatus = AlarmStatus.activePending;

export const _decode_AlarmStatus = $._decodeEnumerated;
export const _encode_AlarmStatus = $._encodeEnumerated;

/* eslint-enable */
