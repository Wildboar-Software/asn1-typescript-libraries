/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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

let _cached_decoder_for_StatusType: $.ASN1Decoder<StatusType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusType (el: _Element): StatusType {
    if (!_cached_decoder_for_StatusType) { _cached_decoder_for_StatusType = $._decodeEnumerated; }
    return _cached_decoder_for_StatusType(el);
}

let _cached_encoder_for_StatusType: $.ASN1Encoder<StatusType> | null = null;

/**
 * @summary Encodes a(n) StatusType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusType, encoded as an ASN.1 Element.
 */
export
function _encode_StatusType (value: StatusType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusType) { _cached_encoder_for_StatusType = $._encodeEnumerated; }
    return _cached_encoder_for_StatusType(value, elGetter);
}


/* eslint-enable */
