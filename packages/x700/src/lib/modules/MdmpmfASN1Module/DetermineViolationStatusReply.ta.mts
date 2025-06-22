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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DetermineViolationStatusReply {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
    non_member = 4,
}

/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export type DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;

/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export const DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;

/**
 * @summary DetermineViolationStatusReply_unknown
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_no_violation
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_violation
 * @constant
 * @type {number}
 */
export const no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_violation_detected
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary violation_detected
 * @constant
 * @type {number}
 */
export const violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_non_member
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_member
 * @constant
 * @type {number}
 */
export const non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DetermineViolationStatusReply = $._decodeEnumerated;


export const _encode_DetermineViolationStatusReply = $._encodeEnumerated;


/* eslint-enable */
