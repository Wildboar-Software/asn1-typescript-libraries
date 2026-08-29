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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary TerminateValidationInfo
 * @description
 *
 * Termination mode for `terminateValidation`. `cancel` (0)
 * discards the partial validation result (ASN.1 comment: "partial
 * audit"). `truncate` (1) returns the partial result in the action
 * reply. ITU-T Rec. X.744 (10/96)
 * [§8.3.7](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.5.5, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TerminateValidationInfo {
    cancel = 0,
    truncate = 1,
}

/**
 * @summary TerminateValidationInfo
 * @description
 *
 * Termination mode for `terminateValidation`. `cancel` (0)
 * discards the partial validation result (ASN.1 comment: "partial
 * audit"). `truncate` (1) returns the partial result in the action
 * reply. ITU-T Rec. X.744 (10/96)
 * [§8.3.7](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.5.5, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```
 *
 * @enum {number}
 */
export type TerminateValidationInfo = _enum_for_TerminateValidationInfo;

/**
 * @summary TerminateValidationInfo
 * @description
 *
 * Termination mode for `terminateValidation`. `cancel` (0)
 * discards the partial validation result (ASN.1 comment: "partial
 * audit"). `truncate` (1) returns the partial result in the action
 * reply. ITU-T Rec. X.744 (10/96)
 * [§8.3.7](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.5.5, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateValidationInfo  ::=  ENUMERATED {
 *   cancel(0), -- discard the result of the partial audit
 *   truncate(1)}
 * ```
 *
 * @enum {number}
 */
export const TerminateValidationInfo = _enum_for_TerminateValidationInfo;

/**
 * @summary TerminateValidationInfo_cancel
 * @description
 *
 * Cancel-mode: abort validation and discard the partial result.
 * Reply is `validationCancelled`. ITU-T Rec. X.744 (10/96) §8.3.7,
 * A.5.5.
 * @constant
 * @type {number}
 */
export const TerminateValidationInfo_cancel: TerminateValidationInfo =
    TerminateValidationInfo.cancel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @description
 *
 * Cancel-mode: abort validation and discard the partial result.
 * ITU-T Rec. X.744 (10/96) §8.3.7.
 * @constant
 * @type {number}
 */
export const cancel: TerminateValidationInfo =
    TerminateValidationInfo.cancel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminateValidationInfo_truncate
 * @description
 *
 * Truncate-mode: abort validation and return the partial result in
 * `resultOfPartialValidation`. ITU-T Rec. X.744 (10/96) §8.3.7,
 * A.5.5.
 * @constant
 * @type {number}
 */
export const TerminateValidationInfo_truncate: TerminateValidationInfo =
    TerminateValidationInfo.truncate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary truncate
 * @description
 *
 * Truncate-mode: abort validation and return the partial result.
 * ITU-T Rec. X.744 (10/96) §8.3.7.
 * @constant
 * @type {number}
 */
export const truncate: TerminateValidationInfo =
    TerminateValidationInfo.truncate; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TerminateValidationInfo = $._decodeEnumerated;


export const _encode_TerminateValidationInfo = $._encodeEnumerated;


/* eslint-enable */
