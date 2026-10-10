/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSRetrieveStatus {
    success = 1,
    errorTransientFailure = 2,
    errorTransientMessageNotFound = 3,
    errorTransientNetworkProblem = 4,
    errorPermanentFailure = 5,
    errorPermanentServiceDenied = 6,
    errorPermanentMessageNotFound = 7,
    errorPermanentContentUnsupported = 8,
}

/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSRetrieveStatus = _enum_for_MMSRetrieveStatus;

/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRetrieveStatus  ::=  ENUMERATED
 * {
 *     success(1),
 *     errorTransientFailure(2),
 *     errorTransientMessageNotFound(3),
 *     errorTransientNetworkProblem(4),
 *     errorPermanentFailure(5),
 *     errorPermanentServiceDenied(6),
 *     errorPermanentMessageNotFound(7),
 *     errorPermanentContentUnsupported(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSRetrieveStatus = _enum_for_MMSRetrieveStatus;

/**
 * @summary MMSRetrieveStatus_success
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_success: MMSRetrieveStatus = MMSRetrieveStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: MMSRetrieveStatus = MMSRetrieveStatus.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientNetworkProblem: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: MMSRetrieveStatus = MMSRetrieveStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentServiceDenied: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentContentUnsupported: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentContentUnsupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const errorPermanentContentUnsupported: MMSRetrieveStatus = MMSRetrieveStatus.errorPermanentContentUnsupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MMSRetrieveStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSRetrieveStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MMSRetrieveStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSRetrieveStatus, encoded as an ASN.1 Element.
 */
export const _encode_MMSRetrieveStatus = $._encodeEnumerated;


/* eslint-enable */
