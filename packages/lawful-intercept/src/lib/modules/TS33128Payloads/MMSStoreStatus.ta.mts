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
const MMSStoreStatus = _enum_for_MMSStoreStatus;

/**
 * @summary MMSStoreStatus_success
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_success = MMSStoreStatus.success satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success = MMSStoreStatus.success satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientFailure = MMSStoreStatus.errorTransientFailure satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = MMSStoreStatus.errorTransientFailure satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientNetworkProblem = MMSStoreStatus.errorTransientNetworkProblem satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = MMSStoreStatus.errorTransientNetworkProblem satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentFailure = MMSStoreStatus.errorPermanentFailure satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = MMSStoreStatus.errorPermanentFailure satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentServiceDenied = MMSStoreStatus.errorPermanentServiceDenied satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = MMSStoreStatus.errorPermanentServiceDenied satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageFormatCorrupt = MMSStoreStatus.errorPermanentMessageFormatCorrupt satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = MMSStoreStatus.errorPermanentMessageFormatCorrupt satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageNotFound = MMSStoreStatus.errorPermanentMessageNotFound satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = MMSStoreStatus.errorPermanentMessageNotFound satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorMMBoxFull = MMSStoreStatus.errorMMBoxFull satisfies MMSStoreStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const errorMMBoxFull = MMSStoreStatus.errorMMBoxFull satisfies MMSStoreStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSStoreStatus: $.ASN1Decoder<MMSStoreStatus> = $._decodeEnumerated;
export const _encode_MMSStoreStatus: $.ASN1Encoder<MMSStoreStatus> = $._encodeEnumerated;


/* eslint-enable */
