/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponse_cancelSessionResponseError
 * @description
 * 
 * Error from ES10b.CancelSession: `invalidTransactionId` (5) or
 * `undefinedError` (127). SGP.22 v3.1 §5.7.14.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse-cancelSessionResponseError ::= INTEGER {
 *     invalidTransactionId(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type CancelSessionResponse_cancelSessionResponseError = INTEGER;

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not the open session. A session that never progressed
 * past GetEUICCChallenge is still dropped. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not the open session. A session that never progressed
 * past GetEUICCChallenge is still dropped. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @description
 * 
 * CancelSession failed for another reason. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_undefinedError: CancelSessionResponse_cancelSessionResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @description
 * 
 * CancelSession failed for another reason. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponse_cancelSessionResponseError = $._decodeInteger;
export const _encode_CancelSessionResponse_cancelSessionResponseError = $._encodeInteger;


/* eslint-enable */
