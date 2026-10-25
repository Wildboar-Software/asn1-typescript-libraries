/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponseEs9_cancelSessionError
 * @description
 * 
 * The SM-DP+ rejected the cancellation: unknown TransactionID (1), eUICC
 * signature invalid (2), or `undefinedError` (127). SGP.22 v3.1 §5.6.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEs9-cancelSessionError ::= INTEGER {
 *     invalidTransactionId(1),
 *     euiccSignatureInvalid(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type CancelSessionResponseEs9_cancelSessionError = INTEGER;

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_invalidTransactionId
 * @description
 * 
 * The SM-DP+ does not know this TransactionID. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_invalidTransactionId = 1 satisfies CancelSessionResponseEs9_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_invalidTransactionId
 * @description
 * 
 * The SM-DP+ does not know this TransactionID. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId = CancelSessionResponseEs9_cancelSessionError_invalidTransactionId satisfies CancelSessionResponseEs9_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @description
 * 
 * The eUICC signature on the cancel data did not verify. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid = 2 satisfies CancelSessionResponseEs9_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @description
 * 
 * The eUICC signature on the cancel data did not verify. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid = CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid satisfies CancelSessionResponseEs9_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @description
 * 
 * CancelSession failed for another reason. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_undefinedError = 127 satisfies CancelSessionResponseEs9_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @description
 * 
 * CancelSession failed for another reason. SGP.22 v3.1 §5.6.5.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError = CancelSessionResponseEs9_cancelSessionError_undefinedError satisfies CancelSessionResponseEs9_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponseEs9_cancelSessionError = $._decodeInteger;
export const _encode_CancelSessionResponseEs9_cancelSessionError = $._encodeInteger;


/* eslint-enable */
