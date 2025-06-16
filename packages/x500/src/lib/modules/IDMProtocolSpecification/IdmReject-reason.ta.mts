/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_IdmReject_reason {
    mistypedPDU = 0,
    duplicateInvokeIDRequest = 1,
    unsupportedOperationRequest = 2,
    unknownOperationRequest = 3,
    mistypedArgumentRequest = 4,
    resourceLimitationRequest = 5,
    unknownInvokeIDResult = 6,
    mistypedResultRequest = 7,
    unknownInvokeIDError = 8,
    unknownError = 9,
    mistypedParameterError = 10,
    unsupportedIdmVersion = 11,
    unsuitableIdmVersion = 12,
    invalidIdmVersion = 13,
}

/**
 * @summary IdmReject_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmReject-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type IdmReject_reason = _enum_for_IdmReject_reason | ENUMERATED;

/**
 * @summary IdmReject_reason_mistypedPDU
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedPDU
 * @constant
 * @type {number}
 */
export const mistypedPDU: IdmReject_reason = IdmReject_reason_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_duplicateInvokeIDRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateInvokeIDRequest
 * @constant
 * @type {number}
 */
export const duplicateInvokeIDRequest: IdmReject_reason = IdmReject_reason_duplicateInvokeIDRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsupportedOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedOperationRequest
 * @constant
 * @type {number}
 */
export const unsupportedOperationRequest: IdmReject_reason = IdmReject_reason_unsupportedOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperationRequest
 * @constant
 * @type {number}
 */
export const unknownOperationRequest: IdmReject_reason = IdmReject_reason_unknownOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedArgumentRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedArgumentRequest
 * @constant
 * @type {number}
 */
export const mistypedArgumentRequest: IdmReject_reason = IdmReject_reason_mistypedArgumentRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_resourceLimitationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitationRequest
 * @constant
 * @type {number}
 */
export const resourceLimitationRequest: IdmReject_reason = IdmReject_reason_resourceLimitationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDResult
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDResult
 * @constant
 * @type {number}
 */
export const unknownInvokeIDResult: IdmReject_reason = IdmReject_reason_unknownInvokeIDResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedResultRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedResultRequest
 * @constant
 * @type {number}
 */
export const mistypedResultRequest: IdmReject_reason = IdmReject_reason_mistypedResultRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDError
 * @constant
 * @type {number}
 */
export const unknownInvokeIDError: IdmReject_reason = IdmReject_reason_unknownInvokeIDError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownError
 * @constant
 * @type {number}
 */
export const unknownError: IdmReject_reason = IdmReject_reason_unknownError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedParameterError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedParameterError
 * @constant
 * @type {number}
 */
export const mistypedParameterError: IdmReject_reason = IdmReject_reason_mistypedParameterError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsupportedIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedIdmVersion
 * @constant
 * @type {number}
 */
export const unsupportedIdmVersion: IdmReject_reason = IdmReject_reason_unsupportedIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsuitableIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuitableIdmVersion
 * @constant
 * @type {number}
 */
export const unsuitableIdmVersion: IdmReject_reason = IdmReject_reason_unsuitableIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_invalidIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidIdmVersion
 * @constant
 * @type {number}
 */
export const invalidIdmVersion: IdmReject_reason = IdmReject_reason_invalidIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IdmReject_reason = $._decodeEnumerated;


export const _encode_IdmReject_reason = $._encodeEnumerated;


/* eslint-enable */
