/* eslint-disable */
import {
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
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmStatus  ::=  ENUMERATED {
 *   cleared(0), activeReportable-Indeterminate(1), activeReportable-Warning(2),
 *   activeReportable-Minor(3), activeReportable-Major(4),
 *   activeReportable-Critical(5), activePending(6)}
 * ```
 *
 * @enum {number}
 */
export type AlarmStatus = _enum_for_AlarmStatus;


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
 * ```
 *
 * @enum {number}
 */
export const AlarmStatus = _enum_for_AlarmStatus;


/**
 * @summary AlarmStatus_cleared
 * @constant
 * @type {number}
 */
export const AlarmStatus_cleared =
    AlarmStatus.cleared; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary cleared
 * @constant
 * @type {number}
 */
export const cleared =
    AlarmStatus.cleared; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activeReportable_Indeterminate
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Indeterminate =
    AlarmStatus.activeReportable_Indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activeReportable_Indeterminate
 * @constant
 * @type {number}
 */
export const activeReportable_Indeterminate =
    AlarmStatus.activeReportable_Indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activeReportable_Warning
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Warning =
    AlarmStatus.activeReportable_Warning; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activeReportable_Warning
 * @constant
 * @type {number}
 */
export const activeReportable_Warning =
    AlarmStatus.activeReportable_Warning; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activeReportable_Minor
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Minor =
    AlarmStatus.activeReportable_Minor; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activeReportable_Minor
 * @constant
 * @type {number}
 */
export const activeReportable_Minor =
    AlarmStatus.activeReportable_Minor; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activeReportable_Major
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Major =
    AlarmStatus.activeReportable_Major; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activeReportable_Major
 * @constant
 * @type {number}
 */
export const activeReportable_Major =
    AlarmStatus.activeReportable_Major; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activeReportable_Critical
 * @constant
 * @type {number}
 */
export const AlarmStatus_activeReportable_Critical =
    AlarmStatus.activeReportable_Critical; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activeReportable_Critical
 * @constant
 * @type {number}
 */
export const activeReportable_Critical =
    AlarmStatus.activeReportable_Critical; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary AlarmStatus_activePending
 * @constant
 * @type {number}
 */
export const AlarmStatus_activePending =
    AlarmStatus.activePending; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activePending
 * @constant
 * @type {number}
 */
export const activePending =
    AlarmStatus.activePending; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_AlarmStatus(el: _Element): AlarmStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AlarmStatus.cleared: return AlarmStatus.cleared;
        case AlarmStatus.activeReportable_Indeterminate: return AlarmStatus.activeReportable_Indeterminate;
        case AlarmStatus.activeReportable_Warning: return AlarmStatus.activeReportable_Warning;
        case AlarmStatus.activeReportable_Minor: return AlarmStatus.activeReportable_Minor;
        case AlarmStatus.activeReportable_Major: return AlarmStatus.activeReportable_Major;
        case AlarmStatus.activeReportable_Critical: return AlarmStatus.activeReportable_Critical;
        case AlarmStatus.activePending: return AlarmStatus.activePending;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for AlarmStatus.',
                el,
            );
    }
}




export const _encode_AlarmStatus: $.ASN1Encoder<AlarmStatus> = $._encodeEnumerated as $.ASN1Encoder<AlarmStatus>;


/* eslint-enable */
