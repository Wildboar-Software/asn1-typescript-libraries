/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
export const IdmReject_reason_mistypedPDU = _enum_for_IdmReject_reason.mistypedPDU satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedPDU
 * @description
 *
 * PDU invalidly constructed. (0)
 *
 * @constant
 * @type {number}
 */
export const mistypedPDU = IdmReject_reason_mistypedPDU satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_duplicateInvokeIDRequest
 * @description
 *
 * Request invokeID already used on this TCP connection. Never reuse. (1)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_duplicateInvokeIDRequest = _enum_for_IdmReject_reason.duplicateInvokeIDRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateInvokeIDRequest
 * @description
 *
 * Request invokeID already used on this TCP connection. (1)
 *
 * @constant
 * @type {number}
 */
export const duplicateInvokeIDRequest = IdmReject_reason_duplicateInvokeIDRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unsupportedOperationRequest
 * @description
 *
 * Operation known but not supported. (2)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedOperationRequest = _enum_for_IdmReject_reason.unsupportedOperationRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedOperationRequest
 * @description
 *
 * Operation known but not supported. (2)
 *
 * @constant
 * @type {number}
 */
export const unsupportedOperationRequest = IdmReject_reason_unsupportedOperationRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownOperationRequest
 * @description
 *
 * Operation unknown to this protocol. (3)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownOperationRequest = _enum_for_IdmReject_reason.unknownOperationRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperationRequest
 * @description
 *
 * Operation unknown to this protocol. (3)
 *
 * @constant
 * @type {number}
 */
export const unknownOperationRequest = IdmReject_reason_unknownOperationRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedArgumentRequest
 * @description
 *
 * Request argument invalidly constructed. (4)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedArgumentRequest = _enum_for_IdmReject_reason.mistypedArgumentRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedArgumentRequest
 * @description
 *
 * Request argument invalidly constructed. (4)
 *
 * @constant
 * @type {number}
 */
export const mistypedArgumentRequest = IdmReject_reason_mistypedArgumentRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_resourceLimitationRequest
 * @description
 *
 * Cannot perform the request due to resource limits. (5)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_resourceLimitationRequest = _enum_for_IdmReject_reason.resourceLimitationRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceLimitationRequest
 * @description
 *
 * Cannot perform the request due to resource limits. (5)
 *
 * @constant
 * @type {number}
 */
export const resourceLimitationRequest = IdmReject_reason_resourceLimitationRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDResult
 * @description
 *
 * Result invokeID is not an outstanding request. (6)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDResult = _enum_for_IdmReject_reason.unknownInvokeIDResult satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDResult
 * @description
 *
 * Result invokeID is not an outstanding request. (6)
 *
 * @constant
 * @type {number}
 */
export const unknownInvokeIDResult = IdmReject_reason_unknownInvokeIDResult satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedResultRequest
 * @description
 *
 * Result malformed, or opcode does not match the Request. (7)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedResultRequest = _enum_for_IdmReject_reason.mistypedResultRequest satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedResultRequest
 * @description
 *
 * Result malformed, or opcode does not match the Request. (7)
 *
 * @constant
 * @type {number}
 */
export const mistypedResultRequest = IdmReject_reason_mistypedResultRequest satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownInvokeIDError
 * @description
 *
 * Error invokeID is not an outstanding request. (8)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDError = _enum_for_IdmReject_reason.unknownInvokeIDError satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownInvokeIDError
 * @description
 *
 * Error invokeID is not an outstanding request. (8)
 *
 * @constant
 * @type {number}
 */
export const unknownInvokeIDError = IdmReject_reason_unknownInvokeIDError satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_unknownError
 * @description
 *
 * errcode not in this protocol or not permitted for the operation. (9)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownError = _enum_for_IdmReject_reason.unknownError satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownError
 * @description
 *
 * errcode not in this protocol or not permitted for the operation. (9)
 *
 * @constant
 * @type {number}
 */
export const unknownError = IdmReject_reason_unknownError satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmReject_reason_mistypedParameterError
 * @description
 *
 * Error parameter malformed. (10)
 *
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedParameterError = _enum_for_IdmReject_reason.mistypedParameterError satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mistypedParameterError
 * @description
 *
 * Error parameter malformed. (10)
 *
 * @constant
 * @type {number}
 */
export const mistypedParameterError = IdmReject_reason_mistypedParameterError satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const IdmReject_reason_unsupportedIdmVersion = _enum_for_IdmReject_reason.unsupportedIdmVersion satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedIdmVersion
 * @description
 *
 * TCP-mapping version not supported. Respond in version 1 format. (11)
 *
 * @constant
 * @type {number}
 */
export const unsupportedIdmVersion = IdmReject_reason_unsupportedIdmVersion satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const IdmReject_reason_unsuitableIdmVersion = _enum_for_IdmReject_reason.unsuitableIdmVersion satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuitableIdmVersion
 * @description
 *
 * Bind mapping version differs from existing associations. (12)
 *
 * @constant
 * @type {number}
 */
export const unsuitableIdmVersion = IdmReject_reason_unsuitableIdmVersion satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */

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
export const IdmReject_reason_invalidIdmVersion = _enum_for_IdmReject_reason.invalidIdmVersion satisfies IdmReject_reason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidIdmVersion
 * @description
 *
 * PDU mapping version differs from the association's agreed version. (13)
 *
 * @constant
 * @type {number}
 */
export const invalidIdmVersion = IdmReject_reason_invalidIdmVersion satisfies IdmReject_reason; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IdmReject_reason = $._decodeEnumerated;


export const _encode_IdmReject_reason = $._encodeEnumerated;


/* eslint-enable */
