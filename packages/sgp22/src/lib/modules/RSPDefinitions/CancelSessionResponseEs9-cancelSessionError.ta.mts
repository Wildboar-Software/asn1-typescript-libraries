/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponseEs9_cancelSessionError
 * @description
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
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_invalidTransactionId: CancelSessionResponseEs9_cancelSessionError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid: CancelSessionResponseEs9_cancelSessionError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_undefinedError: CancelSessionResponseEs9_cancelSessionError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponseEs9_cancelSessionError = $._decodeInteger;
export const _encode_CancelSessionResponseEs9_cancelSessionError = $._encodeInteger;


/* eslint-enable */
