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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProofOfSubmissionRequest */
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
 * ```@enum {number}
 */
export enum _enum_for_ProofOfSubmissionRequest {
    proof_of_submission_not_requested = 0,
    proof_of_submission_requested = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest */
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
 * ```@enum {number}
 */
export type ProofOfSubmissionRequest = _enum_for_ProofOfSubmissionRequest;
/* END_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest */
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
 * ```@enum {number}
 */
export const ProofOfSubmissionRequest = _enum_for_ProofOfSubmissionRequest;
/* END_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest_proof_of_submission_not_requested */
/**
 * @summary ProofOfSubmissionRequest_proof_of_submission_not_requested
 * @constant
 * @type {number}
 */
export const ProofOfSubmissionRequest_proof_of_submission_not_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_not_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest_proof_of_submission_not_requested */

/* START_OF_SYMBOL_DEFINITION proof_of_submission_not_requested */
/**
 * @summary proof_of_submission_not_requested
 * @constant
 * @type {number}
 */
export const proof_of_submission_not_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_not_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION proof_of_submission_not_requested */

/* START_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest_proof_of_submission_requested */
/**
 * @summary ProofOfSubmissionRequest_proof_of_submission_requested
 * @constant
 * @type {number}
 */
export const ProofOfSubmissionRequest_proof_of_submission_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProofOfSubmissionRequest_proof_of_submission_requested */

/* START_OF_SYMBOL_DEFINITION proof_of_submission_requested */
/**
 * @summary proof_of_submission_requested
 * @constant
 * @type {number}
 */
export const proof_of_submission_requested: ProofOfSubmissionRequest =
    ProofOfSubmissionRequest.proof_of_submission_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION proof_of_submission_requested */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProofOfSubmissionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ProofOfSubmissionRequest */
export const _decode_ProofOfSubmissionRequest = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfSubmissionRequest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ProofOfSubmissionRequest */
export const _encode_ProofOfSubmissionRequest = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ProofOfSubmissionRequest */

/* eslint-enable */
