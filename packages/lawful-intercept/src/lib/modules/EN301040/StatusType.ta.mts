/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_StatusType {
    networkFullyAvailable = 0,
    networkErrorsAffectingIntercept = 1,
    reconfigurationInProgress = 2,
    sessionExpired = 3,
    gatewayServicesUnavailable = 4,
}

/**
 * @summary StatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StatusType = _enum_for_StatusType;

/**
 * @summary StatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusType  ::=  ENUMERATED {
 *     networkFullyAvailable,
 *     networkErrorsAffectingIntercept,
 *     reconfigurationInProgress,
 *     sessionExpired,
 *     gatewayServicesUnavailable
 * }
 * ```
 * 
 * @enum {number}
 */
export
const StatusType = _enum_for_StatusType;

/**
 * @summary StatusType_networkFullyAvailable
 * @constant
 * @type {number}
 */
export
const StatusType_networkFullyAvailable: StatusType = StatusType.networkFullyAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkFullyAvailable
 * @constant
 * @type {number}
 */
export
const networkFullyAvailable: StatusType = StatusType.networkFullyAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_networkErrorsAffectingIntercept
 * @constant
 * @type {number}
 */
export
const StatusType_networkErrorsAffectingIntercept: StatusType = StatusType.networkErrorsAffectingIntercept; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkErrorsAffectingIntercept
 * @constant
 * @type {number}
 */
export
const networkErrorsAffectingIntercept: StatusType = StatusType.networkErrorsAffectingIntercept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_reconfigurationInProgress
 * @constant
 * @type {number}
 */
export
const StatusType_reconfigurationInProgress: StatusType = StatusType.reconfigurationInProgress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reconfigurationInProgress
 * @constant
 * @type {number}
 */
export
const reconfigurationInProgress: StatusType = StatusType.reconfigurationInProgress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_sessionExpired
 * @constant
 * @type {number}
 */
export
const StatusType_sessionExpired: StatusType = StatusType.sessionExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sessionExpired
 * @constant
 * @type {number}
 */
export
const sessionExpired: StatusType = StatusType.sessionExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StatusType_gatewayServicesUnavailable
 * @constant
 * @type {number}
 */
export
const StatusType_gatewayServicesUnavailable: StatusType = StatusType.gatewayServicesUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gatewayServicesUnavailable
 * @constant
 * @type {number}
 */
export
const gatewayServicesUnavailable: StatusType = StatusType.gatewayServicesUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StatusType: $.ASN1Decoder<StatusType> = $._decodeEnumerated;
export const _encode_StatusType: $.ASN1Encoder<StatusType> = $._encodeEnumerated;


/* eslint-enable */
