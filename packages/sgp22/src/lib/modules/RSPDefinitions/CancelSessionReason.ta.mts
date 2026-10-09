/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
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
const CancelSessionReason_endUserRejection: CancelSessionReason = 0; /* LONG_NAMED_INTEGER_VALUE */

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
const endUserRejection: CancelSessionReason = CancelSessionReason_endUserRejection; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_postponed: CancelSessionReason = 1; /* LONG_NAMED_INTEGER_VALUE */

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
const postponed: CancelSessionReason = CancelSessionReason_postponed; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_timeout: CancelSessionReason = 2; /* LONG_NAMED_INTEGER_VALUE */

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
const timeout: CancelSessionReason = CancelSessionReason_timeout; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_pprNotAllowed: CancelSessionReason = 3; /* LONG_NAMED_INTEGER_VALUE */

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
const pprNotAllowed: CancelSessionReason = CancelSessionReason_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_metadataMismatch: CancelSessionReason = 4; /* LONG_NAMED_INTEGER_VALUE */

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
const metadataMismatch: CancelSessionReason = CancelSessionReason_metadataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_loadBppExecutionError: CancelSessionReason = 5; /* LONG_NAMED_INTEGER_VALUE */

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
const loadBppExecutionError: CancelSessionReason = CancelSessionReason_loadBppExecutionError; /* SHORT_NAMED_INTEGER_VALUE */

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
const CancelSessionReason_undefinedReason: CancelSessionReason = 127; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedReason: CancelSessionReason = CancelSessionReason_undefinedReason; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CancelSessionReason = $._decodeInteger;
export const _encode_CancelSessionReason = $._encodeInteger;


/* eslint-enable */
