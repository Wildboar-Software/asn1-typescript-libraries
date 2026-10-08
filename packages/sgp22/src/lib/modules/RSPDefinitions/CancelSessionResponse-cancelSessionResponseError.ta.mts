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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse-cancelSessionResponseError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CancelSessionResponse_cancelSessionResponseError = INTEGER;

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_undefinedError: CancelSessionResponse_cancelSessionResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponse_cancelSessionResponseError = $._decodeInteger;
export const _encode_CancelSessionResponse_cancelSessionResponseError = $._encodeInteger;


/* eslint-enable */
