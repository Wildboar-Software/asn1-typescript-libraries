/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponseEsipa_cancelSessionError
 * @description
 *
 * Error alternative of ESipa.CancelSession. The eIM forwards the status of
 * ES9+'.CancelSession, which section 5.7.5 defines as identical to
 * ES9+.CancelSession in SGP.22 section 5.6.5.
 *
 * SGP.32 v1.2, sections 5.7.5, 5.14.8, and 6.3.2.5.
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
 * @description
 *
 * SGP.32 v1.2 lists this code and states that ESipa.CancelSession forwards the
 * ES9+'.CancelSession status. SGP.32 v1.2 does not further define the integer.
 * Annex C.
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId = 1 satisfies CancelSessionResponseEsipa_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId
 * @description
 *
 * Forwarded ES9+'.CancelSession status; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const invalidTransactionId = CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId satisfies CancelSessionResponseEsipa_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @description
 *
 * SGP.32 v1.2 lists this code and states that ESipa.CancelSession forwards the
 * ES9+'.CancelSession status. SGP.32 v1.2 does not further define the integer.
 * Annex C.
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid = 2 satisfies CancelSessionResponseEsipa_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid
 * @description
 *
 * Forwarded ES9+'.CancelSession status; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid = CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid satisfies CancelSessionResponseEsipa_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code and states that ESipa.CancelSession forwards the
 * ES9+'.CancelSession status. SGP.32 v1.2 does not further define the integer.
 * Annex C.
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEsipa_cancelSessionError_undefinedError = 127 satisfies CancelSessionResponseEsipa_cancelSessionError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEsipa_cancelSessionError_undefinedError
 * @description
 *
 * Forwarded ES9+'.CancelSession status; SGP.32 v1.2 does not further define it
 * (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError = CancelSessionResponseEsipa_cancelSessionError_undefinedError satisfies CancelSessionResponseEsipa_cancelSessionError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Decoder<CancelSessionResponseEsipa_cancelSessionError> = $._decodeInteger;
export const _encode_CancelSessionResponseEsipa_cancelSessionError: $.ASN1Encoder<CancelSessionResponseEsipa_cancelSessionError> = $._encodeInteger;


/* eslint-enable */
