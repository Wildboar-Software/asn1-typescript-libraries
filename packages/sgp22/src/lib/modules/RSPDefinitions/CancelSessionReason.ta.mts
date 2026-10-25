/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionReason
 * @description
 * 
 * Why an RSP session is being cancelled. The eUICC signs the reason so the
 * SM-DP+ can record it. SGP.22 v3.1 §5.7.14. v3.1 adds reasons 16-25 and 27-30
 * (enterprise, LPA proxy, RPM, device change, and so on) that this module does
 * not declare. v3.1 notes that cancel reasons added since v3.0.0 are aligned
 * with `ErrorReason`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionReason  ::=  INTEGER {endUserRejection(0), postponed(1), timeout(2), pprNotAllowed(3), metadataMismatch(4), loadBppExecutionError(5), undefinedReason(127)}
 * ```
 */
export
type CancelSessionReason = INTEGER;

/**
 * @summary CancelSessionReason_endUserRejection
 * @description
 * 
 * The End User rejected the download or the pending operation. SGP.22 v3.1
 * §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_endUserRejection = 0 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_endUserRejection
 * @description
 * 
 * The End User rejected the download or the pending operation. SGP.22 v3.1
 * §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const endUserRejection = CancelSessionReason_endUserRejection satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_postponed
 * @description
 * 
 * The operation is postponed. The eUICC may keep the unused one-time key pair
 * for a retry. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_postponed = 1 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_postponed
 * @description
 * 
 * The operation is postponed. The eUICC may keep the unused one-time key pair
 * for a retry. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const postponed = CancelSessionReason_postponed satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_timeout
 * @description
 * 
 * The session timed out. The eUICC may keep the unused one-time key pair for a
 * retry. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_timeout = 2 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_timeout
 * @description
 * 
 * The session timed out. The eUICC may keep the unused one-time key pair for a
 * retry. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const timeout = CancelSessionReason_timeout satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_pprNotAllowed
 * @description
 * 
 * The LPA's check of the Rules Authorisation Table rejected the Profile's PPRs.
 * SGP.22 v3.1 §2.9.2.4 and §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_pprNotAllowed = 3 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_pprNotAllowed
 * @description
 * 
 * The LPA's check of the Rules Authorisation Table rejected the Profile's PPRs.
 * SGP.22 v3.1 §2.9.2.4 and §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const pprNotAllowed = CancelSessionReason_pprNotAllowed satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_metadataMismatch
 * @description
 * 
 * Metadata presented to the End User does not match what the LPA will install.
 * SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_metadataMismatch = 4 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_metadataMismatch
 * @description
 * 
 * Metadata presented to the End User does not match what the LPA will install.
 * SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const metadataMismatch = CancelSessionReason_metadataMismatch satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_loadBppExecutionError
 * @description
 * 
 * LoadBoundProfilePackage failed, and the LPA is cancelling the server session
 * with that result. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_loadBppExecutionError = 5 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_loadBppExecutionError
 * @description
 * 
 * LoadBoundProfilePackage failed, and the LPA is cancelling the server session
 * with that result. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const loadBppExecutionError = CancelSessionReason_loadBppExecutionError satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_undefinedReason
 * @description
 * 
 * No more specific reason. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const CancelSessionReason_undefinedReason = 127 satisfies CancelSessionReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionReason_undefinedReason
 * @description
 * 
 * No more specific reason. SGP.22 v3.1 §5.7.14.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedReason = CancelSessionReason_undefinedReason satisfies CancelSessionReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionReason = $._decodeInteger;
export const _encode_CancelSessionReason = $._encodeInteger;


/* eslint-enable */
