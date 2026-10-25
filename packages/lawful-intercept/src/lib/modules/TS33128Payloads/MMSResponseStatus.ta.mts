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
const MMSResponseStatus: typeof _enum_for_MMSResponseStatus = _enum_for_MMSResponseStatus;

/**
 * @summary MMSResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_ok: _enum_for_MMSResponseStatus.ok = MMSResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok: _enum_for_MMSResponseStatus.ok = MMSResponseStatus.ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnspecified: _enum_for_MMSResponseStatus.errorUnspecified = MMSResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified: _enum_for_MMSResponseStatus.errorUnspecified = MMSResponseStatus.errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorServiceDenied: _enum_for_MMSResponseStatus.errorServiceDenied = MMSResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied: _enum_for_MMSResponseStatus.errorServiceDenied = MMSResponseStatus.errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageFormatCorrupt: _enum_for_MMSResponseStatus.errorMessageFormatCorrupt = MMSResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt: _enum_for_MMSResponseStatus.errorMessageFormatCorrupt = MMSResponseStatus.errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorSendingAddressUnresolved = MMSResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorSendingAddressUnresolved = MMSResponseStatus.errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorMessageNotFound: _enum_for_MMSResponseStatus.errorMessageNotFound = MMSResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound: _enum_for_MMSResponseStatus.errorMessageNotFound = MMSResponseStatus.errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorNetworkProblem: _enum_for_MMSResponseStatus.errorNetworkProblem = MMSResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem: _enum_for_MMSResponseStatus.errorNetworkProblem = MMSResponseStatus.errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorContentNotAccepted: _enum_for_MMSResponseStatus.errorContentNotAccepted = MMSResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted: _enum_for_MMSResponseStatus.errorContentNotAccepted = MMSResponseStatus.errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorUnsupportedMessage: _enum_for_MMSResponseStatus.errorUnsupportedMessage = MMSResponseStatus.errorUnsupportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage: _enum_for_MMSResponseStatus.errorUnsupportedMessage = MMSResponseStatus.errorUnsupportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientFailure: _enum_for_MMSResponseStatus.errorTransientFailure = MMSResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: _enum_for_MMSResponseStatus.errorTransientFailure = MMSResponseStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorTransientSendingAddressUnresolved = MMSResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorTransientSendingAddressUnresolved = MMSResponseStatus.errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientMessageNotFound: _enum_for_MMSResponseStatus.errorTransientMessageNotFound = MMSResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: _enum_for_MMSResponseStatus.errorTransientMessageNotFound = MMSResponseStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientNetworkProblem: _enum_for_MMSResponseStatus.errorTransientNetworkProblem = MMSResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: _enum_for_MMSResponseStatus.errorTransientNetworkProblem = MMSResponseStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorTransientPartialSuccess: _enum_for_MMSResponseStatus.errorTransientPartialSuccess = MMSResponseStatus.errorTransientPartialSuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess: _enum_for_MMSResponseStatus.errorTransientPartialSuccess = MMSResponseStatus.errorTransientPartialSuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentFailure: _enum_for_MMSResponseStatus.errorPermanentFailure = MMSResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: _enum_for_MMSResponseStatus.errorPermanentFailure = MMSResponseStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentServiceDenied: _enum_for_MMSResponseStatus.errorPermanentServiceDenied = MMSResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: _enum_for_MMSResponseStatus.errorPermanentServiceDenied = MMSResponseStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageFormatCorrupt: _enum_for_MMSResponseStatus.errorPermanentMessageFormatCorrupt = MMSResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: _enum_for_MMSResponseStatus.errorPermanentMessageFormatCorrupt = MMSResponseStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorPermanentSendingAddressUnresolved = MMSResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved: _enum_for_MMSResponseStatus.errorPermanentSendingAddressUnresolved = MMSResponseStatus.errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentMessageNotFound: _enum_for_MMSResponseStatus.errorPermanentMessageNotFound = MMSResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: _enum_for_MMSResponseStatus.errorPermanentMessageNotFound = MMSResponseStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentContentNotAccepted: _enum_for_MMSResponseStatus.errorPermanentContentNotAccepted = MMSResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted: _enum_for_MMSResponseStatus.errorPermanentContentNotAccepted = MMSResponseStatus.errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingLimitationsNotMet: _enum_for_MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet: _enum_for_MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet = MMSResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingRequestNotAccepted: _enum_for_MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted: _enum_for_MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted = MMSResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingForwardingDenied: _enum_for_MMSResponseStatus.errorPermanentReplyChargingForwardingDenied = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied: _enum_for_MMSResponseStatus.errorPermanentReplyChargingForwardingDenied = MMSResponseStatus.errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentReplyChargingNotSupported: _enum_for_MMSResponseStatus.errorPermanentReplyChargingNotSupported = MMSResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported: _enum_for_MMSResponseStatus.errorPermanentReplyChargingNotSupported = MMSResponseStatus.errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentAddressHidingNotSupported: _enum_for_MMSResponseStatus.errorPermanentAddressHidingNotSupported = MMSResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported: _enum_for_MMSResponseStatus.errorPermanentAddressHidingNotSupported = MMSResponseStatus.errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSResponseStatus_errorPermanentLackOfPrepaid: _enum_for_MMSResponseStatus.errorPermanentLackOfPrepaid = MMSResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid: _enum_for_MMSResponseStatus.errorPermanentLackOfPrepaid = MMSResponseStatus.errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSResponseStatus: $.ASN1Decoder<MMSResponseStatus> = $._decodeEnumerated;
export const _encode_MMSResponseStatus: $.ASN1Encoder<MMSResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
