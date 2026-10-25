/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason
 * @description
 * 
 * Why a triggered Profile download failed. ecallActive means the Emergency
 * Profile is enabled. SGP.32 v1.2, section 2.11.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError-profileDownloadErrorReason ::= INTEGER {
 *     ecallActive(104),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason = INTEGER;

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive
 * @description
 * The Emergency Profile is enabled, so the IPA stops the download and returns
 * this reason. SGP.32 v1.2, section 2.11.2.3.
 * @constant
 * @type {number}
 */
export
const ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive: 104 = 104 satisfies ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive
 * @description
 * Emergency Profile is enabled, so the IPA stops the download. SGP.32 v1.2,
 * section 2.11.2.3.
 * @constant
 * @type {number}
 */
export
const ecallActive: 104 = ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError
 * @description
 * SGP.32 v1.2 lists undefinedError(127) on profileDownloadErrorReason and does
 * not further define the condition. Section 2.11.2.3.
 * @constant
 * @type {number}
 */
export
const ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError: 127 = 127 satisfies ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError
 * @description
 * SGP.32 v1.2 does not further define undefinedError(127). Section 2.11.2.3.
 * @constant
 * @type {number}
 */
export
const undefinedError: 127 = ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason: $.ASN1Decoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason> = $._decodeInteger;
export const _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason: $.ASN1Encoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason> = $._encodeInteger;


/* eslint-enable */
