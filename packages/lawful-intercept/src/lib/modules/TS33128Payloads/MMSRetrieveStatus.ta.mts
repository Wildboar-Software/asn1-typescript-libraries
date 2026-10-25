/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSRetrieveStatus
 * @description
 * 
 * MMS specific status. It is used by the recipient MMS Proxy-Relay to inform
 * the recipient MMS Client about errors, if any that occurred during the
 * preceding retrieval operation. Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * MMS specific status. It is used by the recipient MMS Proxy-Relay to inform
 * the recipient MMS Client about errors, if any that occurred during the
 * preceding retrieval operation. Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * MMS specific status. It is used by the recipient MMS Proxy-Relay to inform
 * the recipient MMS Client about errors, if any that occurred during the
 * preceding retrieval operation. Include if sent by the MMS Proxy-Relay.
 *
 * 3GPP TS 33.128, clause 7.4.3.6.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const MMSRetrieveStatus_success = MMSRetrieveStatus.success satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success = MMSRetrieveStatus.success satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientFailure = MMSRetrieveStatus.errorTransientFailure satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = MMSRetrieveStatus.errorTransientFailure satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientMessageNotFound = MMSRetrieveStatus.errorTransientMessageNotFound satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = MMSRetrieveStatus.errorTransientMessageNotFound satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorTransientNetworkProblem = MMSRetrieveStatus.errorTransientNetworkProblem satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = MMSRetrieveStatus.errorTransientNetworkProblem satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentFailure = MMSRetrieveStatus.errorPermanentFailure satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = MMSRetrieveStatus.errorPermanentFailure satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentServiceDenied = MMSRetrieveStatus.errorPermanentServiceDenied satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = MMSRetrieveStatus.errorPermanentServiceDenied satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentMessageNotFound = MMSRetrieveStatus.errorPermanentMessageNotFound satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = MMSRetrieveStatus.errorPermanentMessageNotFound satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRetrieveStatus_errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const MMSRetrieveStatus_errorPermanentContentUnsupported = MMSRetrieveStatus.errorPermanentContentUnsupported satisfies MMSRetrieveStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentUnsupported
 * @constant
 * @type {number}
 */
export
const errorPermanentContentUnsupported = MMSRetrieveStatus.errorPermanentContentUnsupported satisfies MMSRetrieveStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSRetrieveStatus: $.ASN1Decoder<MMSRetrieveStatus> = $._decodeEnumerated;
export const _encode_MMSRetrieveStatus: $.ASN1Encoder<MMSRetrieveStatus> = $._encodeEnumerated;


/* eslint-enable */
