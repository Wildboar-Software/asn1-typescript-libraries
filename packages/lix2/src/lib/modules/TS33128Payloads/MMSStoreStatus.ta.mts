/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSStoreStatus
 * @description
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
const MMSStoreStatus_success: MMSStoreStatus = MMSStoreStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: MMSStoreStatus = MMSStoreStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientFailure: MMSStoreStatus = MMSStoreStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: MMSStoreStatus = MMSStoreStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorTransientNetworkProblem: MMSStoreStatus = MMSStoreStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: MMSStoreStatus = MMSStoreStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentFailure: MMSStoreStatus = MMSStoreStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: MMSStoreStatus = MMSStoreStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentServiceDenied: MMSStoreStatus = MMSStoreStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: MMSStoreStatus = MMSStoreStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageFormatCorrupt: MMSStoreStatus = MMSStoreStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: MMSStoreStatus = MMSStoreStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorPermanentMessageNotFound: MMSStoreStatus = MMSStoreStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: MMSStoreStatus = MMSStoreStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStoreStatus_errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const MMSStoreStatus_errorMMBoxFull: MMSStoreStatus = MMSStoreStatus.errorMMBoxFull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMMBoxFull
 * @constant
 * @type {number}
 */
export
const errorMMBoxFull: MMSStoreStatus = MMSStoreStatus.errorMMBoxFull; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSStoreStatus: $.ASN1Decoder<MMSStoreStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSStoreStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSStoreStatus (el: _Element): MMSStoreStatus {
    if (!_cached_decoder_for_MMSStoreStatus) { _cached_decoder_for_MMSStoreStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSStoreStatus(el);
}

let _cached_encoder_for_MMSStoreStatus: $.ASN1Encoder<MMSStoreStatus> | null = null;

/**
 * @summary Encodes a(n) MMSStoreStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSStoreStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSStoreStatus (value: MMSStoreStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSStoreStatus) { _cached_encoder_for_MMSStoreStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSStoreStatus(value, elGetter);
}


/* eslint-enable */
