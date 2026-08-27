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
 * Per-certificate status in `CertReply` ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 * Distinct from `CVStatusCode` (whole-request status). For codes 1–4,
 * `replyChecks` and `replyWantBacks` MUST be empty; for 5–8,
 * `replyChecks` MUST cover each requested check and wantBacks are
 * not populated.
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
 * Per-certificate status in `CertReply` ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 * Distinct from `CVStatusCode` (whole-request status). For codes 1–4,
 * `replyChecks` and `replyWantBacks` MUST be empty; for 5–8,
 * `replyChecks` MUST cover each requested check and wantBacks are
 * not populated.
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
 * Per-certificate status in `CertReply` ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 * Distinct from `CVStatusCode` (whole-request status). For codes 1–4,
 * `replyChecks` and `replyWantBacks` MUST be empty; for 5–8,
 * `replyChecks` MUST cover each requested check and wantBacks are
 * not populated.
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
 * @description
 *
 * `success`(0): Success: all checks were performed successfully. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_success: ReplyStatus =
  ReplyStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 *
 * Short name for `ReplyStatus_success` (0) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const success: ReplyStatus =
  ReplyStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_malformedPKC
 * @description
 *
 * `malformedPKC`(1): Failure: the public key certificate was malformed. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary malformedPKC
 * @description
 *
 * Short name for `ReplyStatus_malformedPKC` (1) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const malformedPKC: ReplyStatus =
  ReplyStatus.malformedPKC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_malformedAC
 * @description
 *
 * `malformedAC`(2): Failure: the attribute certificate was malformed. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary malformedAC
 * @description
 *
 * Short name for `ReplyStatus_malformedAC` (2) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const malformedAC: ReplyStatus =
  ReplyStatus.malformedAC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_unavailableValidationTime
 * @description
 *
 * `unavailableValidationTime`(3): Failure: historical data for the requested validation time is not available. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableValidationTime
 * @description
 *
 * Short name for `ReplyStatus_unavailableValidationTime` (3) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const unavailableValidationTime: ReplyStatus =
  ReplyStatus.unavailableValidationTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_referenceCertHashFail
 * @description
 *
 * `referenceCertHashFail`(4): Failure: the server could not locate the reference certificate or the hash did not match. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary referenceCertHashFail
 * @description
 *
 * Short name for `ReplyStatus_referenceCertHashFail` (4) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const referenceCertHashFail: ReplyStatus =
  ReplyStatus.referenceCertHashFail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathConstructFail
 * @description
 *
 * `certPathConstructFail`(5): Failure: no certification path could be constructed. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathConstructFail
 * @description
 *
 * Short name for `ReplyStatus_certPathConstructFail` (5) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const certPathConstructFail: ReplyStatus =
  ReplyStatus.certPathConstructFail; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathNotValid
 * @description
 *
 * `certPathNotValid`(6): Failure: the constructed certification path is not valid with respect to the validation policy. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathNotValid
 * @description
 *
 * Short name for `ReplyStatus_certPathNotValid` (6) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const certPathNotValid: ReplyStatus =
  ReplyStatus.certPathNotValid; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_certPathNotValidNow
 * @description
 *
 * `certPathNotValidNow`(7): Failure: path not valid now (e.g., hold, missing revocation info, or notYetValid), but a later query may succeed. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certPathNotValidNow
 * @description
 *
 * Short name for `ReplyStatus_certPathNotValidNow` (7) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const certPathNotValidNow: ReplyStatus =
  ReplyStatus.certPathNotValidNow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReplyStatus_wantBackUnsatisfied
 * @description
 *
 * `wantBackUnsatisfied`(8): Failure: checks succeeded, but one or more wantBacks could not be satisfied. ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const ReplyStatus_wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wantBackUnsatisfied
 * @description
 *
 * Short name for `ReplyStatus_wantBackUnsatisfied` (8) ([RFC 5055 §4.9.2](https://datatracker.ietf.org/doc/html/rfc5055#section-4.9.2)).
 *
 * @constant
 * @type {number}
 */
export const wantBackUnsatisfied: ReplyStatus =
  ReplyStatus.wantBackUnsatisfied; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReplyStatus = $._decodeEnumerated;


export const _encode_ReplyStatus = $._encodeEnumerated;


/* eslint-enable */
