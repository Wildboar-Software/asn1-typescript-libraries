/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DownloadErrorCode
 * @description
 * 
 * Error from ES10b.PrepareDownload. SGP.22 v3.1 §5.7.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DownloadErrorCode  ::=  INTEGER {invalidCertificate(1), invalidSignature(2), unsupportedCurve(3), noSessionContext(4), invalidTransactionId(5), undefinedError(127)}
 * ```
 */
export
type DownloadErrorCode = INTEGER;

/**
 * @summary DownloadErrorCode_invalidCertificate
 * @description
 * 
 * CERT.DPpb.SIG, or its chain, did not verify. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidCertificate = 1 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidCertificate
 * @description
 * 
 * CERT.DPpb.SIG, or its chain, did not verify. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const invalidCertificate = DownloadErrorCode_invalidCertificate; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidSignature
 * @description
 * 
 * `smdpSignature2` did not verify. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidSignature = 2 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidSignature
 * @description
 * 
 * `smdpSignature2` did not verify. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const invalidSignature = DownloadErrorCode_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_unsupportedCurve
 * @description
 * 
 * The SM-DP+ key uses a curve the eUICC does not implement for this operation.
 * SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_unsupportedCurve = 3 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_unsupportedCurve
 * @description
 * 
 * The SM-DP+ key uses a curve the eUICC does not implement for this operation.
 * SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const unsupportedCurve = DownloadErrorCode_unsupportedCurve; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_noSessionContext
 * @description
 * 
 * No RSP session is open. GetEUICCChallenge has not been called, or the session
 * was discarded. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_noSessionContext = 4 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_noSessionContext
 * @description
 * 
 * No RSP session is open. GetEUICCChallenge has not been called, or the session
 * was discarded. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const noSessionContext = DownloadErrorCode_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidTransactionId
 * @description
 * 
 * TransactionID does not match the open session. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_invalidTransactionId = 5 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_invalidTransactionId
 * @description
 * 
 * TransactionID does not match the open session. SGP.22 v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId = DownloadErrorCode_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_undefinedError
 * @description
 * 
 * PrepareDownload failed for a reason this enumeration does not name. SGP.22
 * v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const DownloadErrorCode_undefinedError = 127 satisfies DownloadErrorCode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DownloadErrorCode_undefinedError
 * @description
 * 
 * PrepareDownload failed for a reason this enumeration does not name. SGP.22
 * v3.1 §5.7.5.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError = DownloadErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DownloadErrorCode = $._decodeInteger;
export const _encode_DownloadErrorCode = $._encodeInteger;


/* eslint-enable */
