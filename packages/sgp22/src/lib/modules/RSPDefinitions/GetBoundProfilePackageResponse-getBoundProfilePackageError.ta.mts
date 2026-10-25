/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError
 * @description
 * 
 * Error codes of ES9+.GetBoundProfilePackage. SGP.22 v3.1 §5.6.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageResponse-getBoundProfilePackageError ::= INTEGER {
 *     euiccSignatureInvalid(1),
 *     confirmationCodeMissing(2),
 *     confirmationCodeRefused(3),
 *     confirmationCodeRetriesExceeded(4),
 *     bppRebindingRefused(5),
 *     deprecated(6), -- this value is no longer used.
 *     invalidTransactionId(95),
 *     undefinedError(127)
 * }
 * ```
 */
export
type GetBoundProfilePackageResponse_getBoundProfilePackageError = INTEGER;

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature2` did not verify under PK.EUICC.SIG. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid = 1 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid
 * @description
 * 
 * `euiccSignature2` did not verify under PK.EUICC.SIG. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid = GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing
 * @description
 * 
 * The order requires a Confirmation Code and `hashCc` was absent. SGP.22 v3.1
 * §5.6.2 and §4.7.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing = 2 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing
 * @description
 * 
 * The order requires a Confirmation Code and `hashCc` was absent. SGP.22 v3.1
 * §5.6.2 and §4.7.
 * 
 * @constant
 * @type {number}
 */
export
const confirmationCodeMissing = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused
 * @description
 * 
 * The hashed Confirmation Code does not match. The SM-DP+ counts the attempt.
 * SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused = 3 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused
 * @description
 * 
 * The hashed Confirmation Code does not match. The SM-DP+ counts the attempt.
 * SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const confirmationCodeRefused = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded
 * @description
 * 
 * Too many wrong Confirmation Codes. The download order is terminated. SGP.22
 * v3.1 §4.7 and §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded = 4 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded
 * @description
 * 
 * Too many wrong Confirmation Codes. The download order is terminated. SGP.22
 * v3.1 §4.7 and §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const confirmationCodeRetriesExceeded = GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused
 * @description
 * 
 * The BPP is not available for a new binding (Profile - Unavailable,
 * 8.2/3.7). A previous BPP for this eUICC is reused when otPK.EUICC.KA
 * matches, and rebound when it does not. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused = 5 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused
 * @description
 * 
 * The BPP is not available for a new binding (Profile - Unavailable,
 * 8.2/3.7). A previous BPP for this eUICC is reused when otPK.EUICC.KA
 * matches, and rebound when it does not. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const bppRebindingRefused = GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated
 * @description
 * 
 * Value 6. This module calls it `deprecated` and comments that it is no
 * longer used. SGP.22 v3.1 Annex H names the same integer
 * `downloadOrderExpired`.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated = 6 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated
 * @description
 * 
 * Value 6. This module calls it `deprecated` and comments that it is no
 * longer used. SGP.22 v3.1 Annex H names the same integer
 * `downloadOrderExpired`.
 * 
 * @constant
 * @type {number}
 */
export
const deprecated = GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open session. Value 95 in this module. SGP.22
 * v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId = 95 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId
 * @description
 * 
 * The TransactionID is not an open session. Value 95 in this module. SGP.22
 * v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId = GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError
 * @description
 * 
 * GetBoundProfilePackage failed for another reason. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError = 127 satisfies GetBoundProfilePackageResponse_getBoundProfilePackageError; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError
 * @description
 * 
 * GetBoundProfilePackage failed for another reason. SGP.22 v3.1 §5.6.2.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError = GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetBoundProfilePackageResponse_getBoundProfilePackageError = $._decodeInteger;
export const _encode_GetBoundProfilePackageResponse_getBoundProfilePackageError = $._encodeInteger;


/* eslint-enable */
