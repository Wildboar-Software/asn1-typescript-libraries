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
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ReplyStatus {
  success = 0,
  malformedPKC = 1,
  malformedAC = 2,
  unavailableValidationTime = 3,
  referenceCertHashFail = 4,
  certPathConstructFail = 5,
  certPathNotValid = 6,
  certPathNotValidNow = 7,
  wantBackUnsatisfied = 8,
}

/**
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```
 *
 * @enum {number}
 */
export type ReplyStatus = _enum_for_ReplyStatus;

/**
 * @summary ReplyStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyStatus  ::=  ENUMERATED {
 *     success                    (0),
 *     malformedPKC               (1),
 *     malformedAC                (2),
 *     unavailableValidationTime  (3),
 *     referenceCertHashFail      (4),
 *     certPathConstructFail      (5),
 *     certPathNotValid           (6),
 *     certPathNotValidNow        (7),
 *     wantBackUnsatisfied        (8)
 * }
 * ```
 *
 * @enum {number}
 */
export const ReplyStatus = _enum_for_ReplyStatus;

/**
 * @summary ReplyStatus_success
 * @constant
 * @type {number}
 */
export const ReplyStatus_success: ReplyStatus =
  ReplyStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export const success: ReplyStatus =
  ReplyStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_malformedPKC
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary malformedPKC
 * @constant
 * @type {number}
 */
export const malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_malformedAC
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary malformedAC
 * @constant
 * @type {number}
 */
export const malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_unavailableValidationTime
 * @constant
 * @type {number}
 */
export const ReplyStatus_unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableValidationTime
 * @constant
 * @type {number}
 */
export const unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_referenceCertHashFail
 * @constant
 * @type {number}
 */
export const ReplyStatus_referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referenceCertHashFail
 * @constant
 * @type {number}
 */
export const referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathConstructFail
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathConstructFail
 * @constant
 * @type {number}
 */
export const certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathNotValid
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathNotValid
 * @constant
 * @type {number}
 */
export const certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathNotValidNow
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathNotValidNow
 * @constant
 * @type {number}
 */
export const certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_wantBackUnsatisfied
 * @constant
 * @type {number}
 */
export const ReplyStatus_wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wantBackUnsatisfied
 * @constant
 * @type {number}
 */
export const wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReplyStatus = $._decodeEnumerated;


export const _encode_ReplyStatus = $._encodeEnumerated;


/* eslint-enable */
