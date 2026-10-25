/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSResponseStatus
 * @description
 * 
 * MMS specific status. See OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
enum _enum_for_MMSResponseStatus {
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
 * @summary MMSResponseStatus
 * @description
 * 
 * MMS specific status. See OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
type MMSResponseStatus = _enum_for_MMSResponseStatus;

/**
 * @summary MMSResponseStatus
 * @description
 * 
 * MMS specific status. See OMA-TS-MMS_ENC [39] clause 7.3.48.
 *
 * 3GPP TS 33.128, clause 7.4.3.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSResponseStatus  ::=  ENUMERATED
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
const MMSResponseStatus = _enum_for_MMSResponseStatus;

/**
 * @summary MMSResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_ok = MMSResponseStatus.ok satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok = MMSResponseStatus.ok satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnspecified = MMSResponseStatus.errorUnspecified satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified = MMSResponseStatus.errorUnspecified satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorServiceDenied = MMSResponseStatus.errorServiceDenied satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied = MMSResponseStatus.errorServiceDenied satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageFormatCorrupt = MMSResponseStatus.errorMessageFormatCorrupt satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt = MMSResponseStatus.errorMessageFormatCorrupt satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorSendingAddressUnresolved = MMSResponseStatus.errorSendingAddressUnresolved satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved = MMSResponseStatus.errorSendingAddressUnresolved satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageNotFound = MMSResponseStatus.errorMessageNotFound satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound = MMSResponseStatus.errorMessageNotFound satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorNetworkProblem = MMSResponseStatus.errorNetworkProblem satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem = MMSResponseStatus.errorNetworkProblem satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorContentNotAccepted = MMSResponseStatus.errorContentNotAccepted satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted = MMSResponseStatus.errorContentNotAccepted satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnsupportedMessage = MMSResponseStatus.errorUnsupportedMessage satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage = MMSResponseStatus.errorUnsupportedMessage satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientFailure = MMSResponseStatus.errorTransientFailure satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = MMSResponseStatus.errorTransientFailure satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientSendingAddressUnresolved = MMSResponseStatus.errorTransientSendingAddressUnresolved satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved = MMSResponseStatus.errorTransientSendingAddressUnresolved satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientMessageNotFound = MMSResponseStatus.errorTransientMessageNotFound satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = MMSResponseStatus.errorTransientMessageNotFound satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientNetworkProblem = MMSResponseStatus.errorTransientNetworkProblem satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = MMSResponseStatus.errorTransientNetworkProblem satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientPartialSuccess = MMSResponseStatus.errorTransientPartialSuccess satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess = MMSResponseStatus.errorTransientPartialSuccess satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentFailure = MMSResponseStatus.errorPermanentFailure satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = MMSResponseStatus.errorPermanentFailure satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentServiceDenied = MMSResponseStatus.errorPermanentServiceDenied satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = MMSResponseStatus.errorPermanentServiceDenied satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageFormatCorrupt = MMSResponseStatus.errorPermanentMessageFormatCorrupt satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = MMSResponseStatus.errorPermanentMessageFormatCorrupt satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentSendingAddressUnresolved = MMSResponseStatus.errorPermanentSendingAddressUnresolved satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved = MMSResponseStatus.errorPermanentSendingAddressUnresolved satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageNotFound = MMSResponseStatus.errorPermanentMessageNotFound satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = MMSResponseStatus.errorPermanentMessageNotFound satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentContentNotAccepted = MMSResponseStatus.errorPermanentContentNotAccepted satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted = MMSResponseStatus.errorPermanentContentNotAccepted satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingForwardingDenied = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingNotSupported = MMSResponseStatus.errorPermanentReplyChargingNotSupported satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported = MMSResponseStatus.errorPermanentReplyChargingNotSupported satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentAddressHidingNotSupported = MMSResponseStatus.errorPermanentAddressHidingNotSupported satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported = MMSResponseStatus.errorPermanentAddressHidingNotSupported satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentLackOfPrepaid = MMSResponseStatus.errorPermanentLackOfPrepaid satisfies MMSResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid = MMSResponseStatus.errorPermanentLackOfPrepaid satisfies MMSResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSResponseStatus: $.ASN1Decoder<MMSResponseStatus> = $._decodeEnumerated;
export const _encode_MMSResponseStatus: $.ASN1Encoder<MMSResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
