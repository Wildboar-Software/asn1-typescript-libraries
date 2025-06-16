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
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_ViolationStatus {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
}

/**
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 * 
 * @enum {number}
 */
export type ViolationStatus = _enum_for_ViolationStatus;

/**
 * @summary ViolationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 * 
 * @enum {number}
 */
export const ViolationStatus = _enum_for_ViolationStatus;

/**
 * @summary ViolationStatus_unknown
 * @constant
 * @type {number}
 */
export const ViolationStatus_unknown: ViolationStatus =
    ViolationStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: ViolationStatus =
    ViolationStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ViolationStatus_no_violation
 * @constant
 * @type {number}
 */
export const ViolationStatus_no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_violation
 * @constant
 * @type {number}
 */
export const no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ViolationStatus_violation_detected
 * @constant
 * @type {number}
 */
export const ViolationStatus_violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary violation_detected
 * @constant
 * @type {number}
 */
export const violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ViolationStatus = $._decodeEnumerated;


export const _encode_ViolationStatus = $._encodeEnumerated;


/* eslint-enable */
