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
const MMSDeleteResponseStatus_ok = MMSDeleteResponseStatus.ok satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok = MMSDeleteResponseStatus.ok satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnspecified = MMSDeleteResponseStatus.errorUnspecified satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified = MMSDeleteResponseStatus.errorUnspecified satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid satisfies MMSDeleteResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid satisfies MMSDeleteResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSDeleteResponseStatus: $.ASN1Decoder<MMSDeleteResponseStatus> = $._decodeEnumerated;
export const _encode_MMSDeleteResponseStatus: $.ASN1Encoder<MMSDeleteResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
