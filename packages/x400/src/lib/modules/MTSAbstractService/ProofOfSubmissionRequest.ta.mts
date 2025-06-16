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
 * @summary ProofOfSubmissionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfSubmissionRequest  ::=  ENUMERATED {
 *   proof-of-submission-not-requested(0), proof-of-submission-requested(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ProofOfSubmissionRequest {
    proof_of_submission_not_requested = 0,
    proof_of_submission_requested = 1,
}

/**
 * @summary ProofOfSubmissionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfSubmissionRequest  ::=  ENUMERATED {
 *   proof-of-submission-not-requested(0), proof-of-submission-requested(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type ProofOfSubmissionRequest = _enum_for_ProofOfSubmissionRequest;

/**
 * @summary ProofOfSubmissionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProofOfSubmissionRequest  ::=  ENUMERATED {
 *   proof-of-submission-not-requested(0), proof-of-submission-requested(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const ProofOfSubmissionRequest = _enum_for_ProofOfSubmissionRequest;

/**
 * @summary ProofOfSubmissionRequest_proof_of_submission_not_requested
 * @constant
 * @type {number}
 */
export const ProofOfSubmissionRequest_proof_of_submission_not_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proof_of_submission_not_requested
 * @constant
 * @type {number}
 */
export const proof_of_submission_not_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProofOfSubmissionRequest_proof_of_submission_requested
 * @constant
 * @type {number}
 */
export const ProofOfSubmissionRequest_proof_of_submission_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proof_of_submission_requested
 * @constant
 * @type {number}
 */
export const proof_of_submission_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_requested; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ProofOfSubmissionRequest = $._decodeEnumerated;


export const _encode_ProofOfSubmissionRequest = $._encodeEnumerated;


/* eslint-enable */
