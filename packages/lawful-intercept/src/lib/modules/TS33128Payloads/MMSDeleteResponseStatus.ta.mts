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
const MMSDeleteResponseStatus: typeof _enum_for_MMSDeleteResponseStatus = _enum_for_MMSDeleteResponseStatus;

/**
 * @summary MMSDeleteResponseStatus_ok
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_ok: _enum_for_MMSDeleteResponseStatus.ok = MMSDeleteResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok: _enum_for_MMSDeleteResponseStatus.ok = MMSDeleteResponseStatus.ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnspecified: _enum_for_MMSDeleteResponseStatus.errorUnspecified = MMSDeleteResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified: _enum_for_MMSDeleteResponseStatus.errorUnspecified = MMSDeleteResponseStatus.errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorServiceDenied: _enum_for_MMSDeleteResponseStatus.errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied: _enum_for_MMSDeleteResponseStatus.errorServiceDenied = MMSDeleteResponseStatus.errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageFormatCorrupt: _enum_for_MMSDeleteResponseStatus.errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt: _enum_for_MMSDeleteResponseStatus.errorMessageFormatCorrupt = MMSDeleteResponseStatus.errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorSendingAddressUnresolved = MMSDeleteResponseStatus.errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorMessageNotFound = MMSDeleteResponseStatus.errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorNetworkProblem: _enum_for_MMSDeleteResponseStatus.errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem: _enum_for_MMSDeleteResponseStatus.errorNetworkProblem = MMSDeleteResponseStatus.errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorContentNotAccepted: _enum_for_MMSDeleteResponseStatus.errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted: _enum_for_MMSDeleteResponseStatus.errorContentNotAccepted = MMSDeleteResponseStatus.errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorUnsupportedMessage: _enum_for_MMSDeleteResponseStatus.errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsupportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsupportedMessage: _enum_for_MMSDeleteResponseStatus.errorUnsupportedMessage = MMSDeleteResponseStatus.errorUnsupportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientFailure: _enum_for_MMSDeleteResponseStatus.errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: _enum_for_MMSDeleteResponseStatus.errorTransientFailure = MMSDeleteResponseStatus.errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved = MMSDeleteResponseStatus.errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorTransientMessageNotFound = MMSDeleteResponseStatus.errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientNetworkProblem: _enum_for_MMSDeleteResponseStatus.errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: _enum_for_MMSDeleteResponseStatus.errorTransientNetworkProblem = MMSDeleteResponseStatus.errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorTransientPartialSuccess: _enum_for_MMSDeleteResponseStatus.errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSuccess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSuccess: _enum_for_MMSDeleteResponseStatus.errorTransientPartialSuccess = MMSDeleteResponseStatus.errorTransientPartialSuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentFailure: _enum_for_MMSDeleteResponseStatus.errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: _enum_for_MMSDeleteResponseStatus.errorPermanentFailure = MMSDeleteResponseStatus.errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentServiceDenied: _enum_for_MMSDeleteResponseStatus.errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: _enum_for_MMSDeleteResponseStatus.errorPermanentServiceDenied = MMSDeleteResponseStatus.errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageFormatCorrupt: _enum_for_MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: _enum_for_MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt = MMSDeleteResponseStatus.errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved: _enum_for_MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved = MMSDeleteResponseStatus.errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: _enum_for_MMSDeleteResponseStatus.errorPermanentMessageNotFound = MMSDeleteResponseStatus.errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentContentNotAccepted: _enum_for_MMSDeleteResponseStatus.errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted: _enum_for_MMSDeleteResponseStatus.errorPermanentContentNotAccepted = MMSDeleteResponseStatus.errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingLimitationsNotMet: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet = MMSDeleteResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingRequestNotAccepted: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted = MMSDeleteResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingForwardingDenied: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied = MMSDeleteResponseStatus.errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentReplyChargingNotSupported: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported: _enum_for_MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported = MMSDeleteResponseStatus.errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentAddressHidingNotSupported: _enum_for_MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported: _enum_for_MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported = MMSDeleteResponseStatus.errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSDeleteResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const MMSDeleteResponseStatus_errorPermanentLackOfPrepaid: _enum_for_MMSDeleteResponseStatus.errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid: _enum_for_MMSDeleteResponseStatus.errorPermanentLackOfPrepaid = MMSDeleteResponseStatus.errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSDeleteResponseStatus: $.ASN1Decoder<MMSDeleteResponseStatus> = $._decodeEnumerated;
export const _encode_MMSDeleteResponseStatus: $.ASN1Encoder<MMSDeleteResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
