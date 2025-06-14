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
let _cached_decoder_for_ProofOfSubmissionRequest: $.ASN1Decoder<ProofOfSubmissionRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ProofOfSubmissionRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ProofOfSubmissionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProofOfSubmissionRequest} The decoded data structure.
 */
export function _decode_ProofOfSubmissionRequest(el: _Element) {
    if (!_cached_decoder_for_ProofOfSubmissionRequest) {
        _cached_decoder_for_ProofOfSubmissionRequest = $._decodeEnumerated;
    }
    return _cached_decoder_for_ProofOfSubmissionRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfSubmissionRequest */
let _cached_encoder_for_ProofOfSubmissionRequest: $.ASN1Encoder<ProofOfSubmissionRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProofOfSubmissionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ProofOfSubmissionRequest */
/**
 * @summary Encodes a(n) ProofOfSubmissionRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProofOfSubmissionRequest, encoded as an ASN.1 Element.
 */
export function _encode_ProofOfSubmissionRequest(
    value: ProofOfSubmissionRequest,
    elGetter: $.ASN1Encoder<ProofOfSubmissionRequest>
) {
    if (!_cached_encoder_for_ProofOfSubmissionRequest) {
        _cached_encoder_for_ProofOfSubmissionRequest = $._encodeEnumerated;
    }
    return _cached_encoder_for_ProofOfSubmissionRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProofOfSubmissionRequest */

/* eslint-enable */
