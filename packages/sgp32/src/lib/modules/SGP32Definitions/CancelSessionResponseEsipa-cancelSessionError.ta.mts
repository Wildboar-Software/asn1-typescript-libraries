/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponseEsipa_cancelSessionError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEsipa-cancelSessionError ::= INTEGER {
 *     invalidTransactionId(1),
 *     euiccSignatureInvalid(2),
 *     undefinedError(127)
 * }
 * ```
 */
export
type CancelSessionResponseEsipa_cancelSessionError = INTEGER;

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId: CancelSessionResponseEsipa_cancelSessionError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid: CancelSessionResponseEsipa_cancelSessionError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_undefinedError: CancelSessionResponseEsipa_cancelSessionError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponseEsipa_cancelSessionError = CancelSessionResponseEsipa_cancelSessionError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Decoder<CancelSessionResponseEsipa_cancelSessionError> = $._decodeInteger;
export const _encode_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Encoder<CancelSessionResponseEsipa_cancelSessionError> = $._encodeInteger;


/* eslint-enable */
