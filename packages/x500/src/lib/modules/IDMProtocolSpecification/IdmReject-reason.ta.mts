/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary IdmReject_reason
 * @description
 *
 * Reject of a Request/Result/Error whose invoke ID was recovered.
 * Duplicate invoke IDs are for the whole TCP connection, not just
 * outstanding ops. (11)–(13) are TCP-header version issues, not
 * Directory version. Extensible.
 *
 * @enum {number}
 */
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
 * Why a Request/Result/Error was rejected. (11)–(13) are TCP-mapping
 * version problems, not Directory version. Duplicate invoke IDs are
 * for the whole connection lifetime, not just outstanding ops.
 * Extensible; unknown reasons: treat as protocol error / close.
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
 * @description
 *
 * PDU invalidly constructed. (0)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedPDU
 * @description
 *
 * PDU invalidly constructed. (0)
 *
 * @constant
 * @type {number}
 */
export const mistypedPDU: IdmReject_reason = IdmReject_reason_mistypedPDU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_duplicateInvokeIDRequest
 * @description
 *
 * Request invokeID already used on this TCP connection. Never reuse. (1)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateInvokeIDRequest
 * @description
 *
 * Request invokeID already used on this TCP connection. (1)
 *
 * @constant
 * @type {number}
 */
export const duplicateInvokeIDRequest: IdmReject_reason = IdmReject_reason_duplicateInvokeIDRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsupportedOperationRequest
 * @description
 *
 * Operation known but not supported. (2)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedOperationRequest
 * @description
 *
 * Operation known but not supported. (2)
 *
 * @constant
 * @type {number}
 */
export const unsupportedOperationRequest: IdmReject_reason = IdmReject_reason_unsupportedOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownOperationRequest
 * @description
 *
 * Operation unknown to this protocol. (3)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperationRequest
 * @description
 *
 * Operation unknown to this protocol. (3)
 *
 * @constant
 * @type {number}
 */
export const unknownOperationRequest: IdmReject_reason = IdmReject_reason_unknownOperationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedArgumentRequest
 * @description
 *
 * Request argument invalidly constructed. (4)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedArgumentRequest
 * @description
 *
 * Request argument invalidly constructed. (4)
 *
 * @constant
 * @type {number}
 */
export const mistypedArgumentRequest: IdmReject_reason = IdmReject_reason_mistypedArgumentRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_resourceLimitationRequest
 * @description
 *
 * Cannot perform the request due to resource limits. (5)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitationRequest
 * @description
 *
 * Cannot perform the request due to resource limits. (5)
 *
 * @constant
 * @type {number}
 */
export const resourceLimitationRequest: IdmReject_reason = IdmReject_reason_resourceLimitationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDResult
 * @description
 *
 * Result invokeID is not an outstanding request. (6)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDResult
 * @description
 *
 * Result invokeID is not an outstanding request. (6)
 *
 * @constant
 * @type {number}
 */
export const unknownInvokeIDResult: IdmReject_reason = IdmReject_reason_unknownInvokeIDResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedResultRequest
 * @description
 *
 * Result malformed, or opcode does not match the Request. (7)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedResultRequest
 * @description
 *
 * Result malformed, or opcode does not match the Request. (7)
 *
 * @constant
 * @type {number}
 */
export const mistypedResultRequest: IdmReject_reason = IdmReject_reason_mistypedResultRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDError
 * @description
 *
 * Error invokeID is not an outstanding request. (8)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDError
 * @description
 *
 * Error invokeID is not an outstanding request. (8)
 *
 * @constant
 * @type {number}
 */
export const unknownInvokeIDError: IdmReject_reason = IdmReject_reason_unknownInvokeIDError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownError
 * @description
 *
 * errcode not in this protocol or not permitted for the operation. (9)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownError
 * @description
 *
 * errcode not in this protocol or not permitted for the operation. (9)
 *
 * @constant
 * @type {number}
 */
export const unknownError: IdmReject_reason = IdmReject_reason_unknownError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedParameterError
 * @description
 *
 * Error parameter malformed. (10)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedParameterError
 * @description
 *
 * Error parameter malformed. (10)
 *
 * @constant
 * @type {number}
 */
export const mistypedParameterError: IdmReject_reason = IdmReject_reason_mistypedParameterError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsupportedIdmVersion
 * @description
 *
 * TCP-mapping version (segment header) not supported. Respond in version 1
 * format. (11)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedIdmVersion
 * @description
 *
 * TCP-mapping version not supported. Respond in version 1 format. (11)
 *
 * @constant
 * @type {number}
 */
export const unsupportedIdmVersion: IdmReject_reason = IdmReject_reason_unsupportedIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsuitableIdmVersion
 * @description
 *
 * Bind uses a mapping version different from existing associations. Echo
 * Bind's version. (12)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuitableIdmVersion
 * @description
 *
 * Bind mapping version differs from existing associations. (12)
 *
 * @constant
 * @type {number}
 */
export const unsuitableIdmVersion: IdmReject_reason = IdmReject_reason_unsuitableIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_invalidIdmVersion
 * @description
 *
 * A PDU used a mapping version other than the one agreed for the
 * association. Reject in the agreed version. (13)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidIdmVersion
 * @description
 *
 * PDU mapping version differs from the association's agreed version. (13)
 *
 * @constant
 * @type {number}
 */
export const invalidIdmVersion: IdmReject_reason = IdmReject_reason_invalidIdmVersion; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IdmReject_reason = $._decodeEnumerated;


export const _encode_IdmReject_reason = $._encodeEnumerated;


/* eslint-enable */
