/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * The delete response, as defined in OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSDeleteResponseStatus {
    ok = 1,
    errorUnspecified = 2,
    errorServiceDenied = 3,
    errorMessageFormatCorrupt = 4,
    errorSendingAddressUnresolved = 5,
    errorMessageNotFound = 6,
    errorNetworkProblem = 7,
    errorContentNotAccepted = 8,
    errorUnsupportedMessage = 9,
    errorTransientFailure = 10,
    errorTransientSendingAddressUnresolved = 11,
    errorTransientMessageNotFound = 12,
    errorTransientNetworkProblem = 13,
    errorTransientPartialSuccess = 14,
    errorPermanentFailure = 15,
    errorPermanentServiceDenied = 16,
    errorPermanentMessageFormatCorrupt = 17,
    errorPermanentSendingAddressUnresolved = 18,
    errorPermanentMessageNotFound = 19,
    errorPermanentContentNotAccepted = 20,
    errorPermanentReplyChargingLimitationsNotMet = 21,
    errorPermanentReplyChargingRequestNotAccepted = 22,
    errorPermanentReplyChargingForwardingDenied = 23,
    errorPermanentReplyChargingNotSupported = 24,
    errorPermanentAddressHidingNotSupported = 25,
    errorPermanentLackOfPrepaid = 26,
}

/**
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * The delete response, as defined in OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSDeleteResponseStatus = _enum_for_MMSDeleteResponseStatus;

/**
 * @summary MMSDeleteResponseStatus
 * @description
 * 
 * The delete response, as defined in OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeleteResponseStatus  ::=  ENUMERATED
 * {
 *     ok(1),
 *     errorUnspecified(2),
 *     errorServiceDenied(3),
 *     errorMessageFormatCorrupt(4),
 *     errorSendingAddressUnresolved(5),
 *     errorMessageNotFound(6),
 *     errorNetworkProblem(7),
 *     errorContentNotAccepted(8),
 *     errorUnsupportedMessage(9),
 *     errorTransientFailure(10),
 *     errorTransientSendingAddressUnresolved(11),
 *     errorTransientMessageNotFound(12),
 *     errorTransientNetworkProblem(13),
 *     errorTransientPartialSuccess(14),
 *     errorPermanentFailure(15),
 *     errorPermanentServiceDenied(16),
 *     errorPermanentMessageFormatCorrupt(17),
 *     errorPermanentSendingAddressUnresolved(18),
 *     errorPermanentMessageNotFound(19),
 *     errorPermanentContentNotAccepted(20),
 *     errorPermanentReplyChargingLimitationsNotMet(21),
 *     errorPermanentReplyChargingRequestNotAccepted(22),
 *     errorPermanentReplyChargingForwardingDenied(23),
 *     errorPermanentReplyChargingNotSupported(24),
 *     errorPermanentAddressHidingNotSupported(25),
 *     errorPermanentLackOfPrepaid(26)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSDeleteResponseStatus = _enum_for_MMSDeleteResponseStatus;

/**
 * @summary MMSDeleteResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_ok = MMSDeleteResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok = MMSDeleteResponseStatus.ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnspecified = MMSDeleteResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified = MMSDeleteResponseStatus.errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSDeleteResponseStatus: $.ASN1Decoder<MMSDeleteResponseStatus> = $._decodeEnumerated;
export const _encode_MMSDeleteResponseStatus: $.ASN1Encoder<MMSDeleteResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
