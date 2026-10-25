/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSStoreStatus
 * @description
 * 
 * Indicates if the MM was successfully stored in the MMBox. Include if sent by
 * the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSStoreStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientNetworkProblem(3),
 *     errorPermanentFailure(4),
 *     errorPermanentServiceDenied(5),
 *     errorPermanentMessageFormatCorrupt(6),
 *     errorPermanentMessageNotFound(7),
 *     errorMMBoxFull(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSStoreStatus {
    success = 1,
    errorTransientFailure = 2,
    errorTransientNetworkProblem = 3,
    errorPermanentFailure = 4,
    errorPermanentServiceDenied = 5,
    errorPermanentMessageFormatCorrupt = 6,
    errorPermanentMessageNotFound = 7,
    errorMMBoxFull = 8,
}

/**
 * @summary MMSStoreStatus
 * @description
 * 
 * Indicates if the MM was successfully stored in the MMBox. Include if sent by
 * the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSStoreStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientNetworkProblem(3),
 *     errorPermanentFailure(4),
 *     errorPermanentServiceDenied(5),
 *     errorPermanentMessageFormatCorrupt(6),
 *     errorPermanentMessageNotFound(7),
 *     errorMMBoxFull(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSStoreStatus = _enum_for_MMSStoreStatus;

/**
 * @summary MMSStoreStatus
 * @description
 * 
 * Indicates if the MM was successfully stored in the MMBox. Include if sent by
 * the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSStoreStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientNetworkProblem(3),
 *     errorPermanentFailure(4),
 *     errorPermanentServiceDenied(5),
 *     errorPermanentMessageFormatCorrupt(6),
 *     errorPermanentMessageNotFound(7),
 *     errorMMBoxFull(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSStoreStatus: typeof _enum_for_MMSStoreStatus = _enum_for_MMSStoreStatus;

/**
 * @summary MMSStoreStatus_success
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_success: _enum_for_MMSStoreStatus.success = MMSStoreStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: _enum_for_MMSStoreStatus.success = MMSStoreStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientFailure: _enum_for_MMSStoreStatus.errorTransientFailure = MMSStoreStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: _enum_for_MMSStoreStatus.errorTransientFailure = MMSStoreStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientNetworkProblem: _enum_for_MMSStoreStatus.errorTransientNetworkProblem = MMSStoreStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: _enum_for_MMSStoreStatus.errorTransientNetworkProblem = MMSStoreStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentFailure: _enum_for_MMSStoreStatus.errorPermanentFailure = MMSStoreStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: _enum_for_MMSStoreStatus.errorPermanentFailure = MMSStoreStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentServiceDenied: _enum_for_MMSStoreStatus.errorPermanentServiceDenied = MMSStoreStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: _enum_for_MMSStoreStatus.errorPermanentServiceDenied = MMSStoreStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageFormatCorrupt: _enum_for_MMSStoreStatus.errorPermanentMessageFormatCorrupt = MMSStoreStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: _enum_for_MMSStoreStatus.errorPermanentMessageFormatCorrupt = MMSStoreStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageNotFound: _enum_for_MMSStoreStatus.errorPermanentMessageNotFound = MMSStoreStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: _enum_for_MMSStoreStatus.errorPermanentMessageNotFound = MMSStoreStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorMMBoxFull: _enum_for_MMSStoreStatus.errorMMBoxFull = MMSStoreStatus.errorMMBoxFull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const errorMMBoxFull: _enum_for_MMSStoreStatus.errorMMBoxFull = MMSStoreStatus.errorMMBoxFull; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSStoreStatus: $.ASN1Decoder<MMSStoreStatus> = $._decodeEnumerated;
export const _encode_MMSStoreStatus: $.ASN1Encoder<MMSStoreStatus> = $._encodeEnumerated;


/* eslint-enable */
