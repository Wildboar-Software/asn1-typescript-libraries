/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ActualResponseStatus {
    ok = 0,
    errorUnspecified = 1,
    errorServiceDenied = 2,
    errorMessageFormatCorrupt = 3,
    errorSendingAddressUnresolved = 4,
    errorMessageNotFound = 5,
    errorNetworkProblem = 6,
    errorContentNotAccepted = 7,
    errorUnsuportedMessage = 8,
    errorTransientFailure = 9,
    errorTransientSendingAddressUnresolved = 10,
    errorTransientMessageNotFound = 11,
    errorTransientNetworkProblem = 12,
    errorTransientPartialSucess = 13,
    errorPermanentFailure = 14,
    errorPermanentServiceDenied = 15,
    errorPermanentMessageFormatCorrupt = 16,
    errorPermanentSendingAddressUnresolved = 17,
    errorPermanentMessageNotFound = 18,
    errorPermanentContentNotAccepted = 19,
    errorPermanentReplyChargingLimitationsNotMet = 20,
    errorPermanentReplyChargingRequestNotAccepted = 21,
    errorPermanentReplyChargingForwardingDenied = 22,
    errorPermanentReplyChargingNotSupported = 23,
    errorPermanentAddressHidingNotSupported = 24,
    errorPermanentLackOfPrepaid = 25,
}

/**
 * @summary ActualResponseStatus
 * @description
 * 
 * MMS-specific response status (table 15.3.6.1.2). Annex B.15 names each code,
 * including the spellings errorUnsuportedMessage and
 * errorTransientPartialSucess. Clause 15.3 does not further define the
 * individual codes.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActualResponseStatus  ::=  ENUMERATED
 * {
 *     ok                                                     (0),
 *     errorUnspecified                                    (1),
 *     errorServiceDenied                                    (2),
 *     errorMessageFormatCorrupt                            (3),
 * 
 *     errorSendingAddressUnresolved                        (4),
 *     errorMessageNotFound                                (5),
 *     errorNetworkProblem                                (6),
 *     errorContentNotAccepted                            (7),
 *     errorUnsuportedMessage                                (8),
 *     errorTransientFailure                                (9),
 *     errorTransientSendingAddressUnresolved                (10),
 *     errorTransientMessageNotFound                        (11),
 *     errorTransientNetworkProblem                        (12),
 *     errorTransientPartialSucess                        (13),
 *     errorPermanentFailure                                (14),
 *     errorPermanentServiceDenied                        (15),
 *     errorPermanentMessageFormatCorrupt                    (16),
 *     errorPermanentSendingAddressUnresolved                (17),
 *     errorPermanentMessageNotFound                        (18),
 *     errorPermanentContentNotAccepted                    (19),
 *     errorPermanentReplyChargingLimitationsNotMet        (20),
 *     errorPermanentReplyChargingRequestNotAccepted        (21),
 *     errorPermanentReplyChargingForwardingDenied        (22),
 *     errorPermanentReplyChargingNotSupported            (23),
 *     errorPermanentAddressHidingNotSupported            (24),
 *     errorPermanentLackOfPrepaid                        (25),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ActualResponseStatus = _enum_for_ActualResponseStatus | ENUMERATED;

/**
 * @summary ActualResponseStatus_ok
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_ok = _enum_for_ActualResponseStatus.ok satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const ok = ActualResponseStatus_ok satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorUnspecified
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorUnspecified = _enum_for_ActualResponseStatus.errorUnspecified satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorUnspecified = ActualResponseStatus_errorUnspecified satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorServiceDenied
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorServiceDenied = _enum_for_ActualResponseStatus.errorServiceDenied satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorServiceDenied = ActualResponseStatus_errorServiceDenied satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorMessageFormatCorrupt
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorMessageFormatCorrupt = _enum_for_ActualResponseStatus.errorMessageFormatCorrupt satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt = ActualResponseStatus_errorMessageFormatCorrupt satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorSendingAddressUnresolved
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorSendingAddressUnresolved satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved = ActualResponseStatus_errorSendingAddressUnresolved satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorMessageNotFound
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorMessageNotFound = _enum_for_ActualResponseStatus.errorMessageNotFound satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound = ActualResponseStatus_errorMessageNotFound satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorNetworkProblem
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorNetworkProblem = _enum_for_ActualResponseStatus.errorNetworkProblem satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem = ActualResponseStatus_errorNetworkProblem satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorContentNotAccepted
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorContentNotAccepted = _enum_for_ActualResponseStatus.errorContentNotAccepted satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted = ActualResponseStatus_errorContentNotAccepted satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorUnsuportedMessage
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorUnsuportedMessage = _enum_for_ActualResponseStatus.errorUnsuportedMessage satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsuportedMessage
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorUnsuportedMessage = ActualResponseStatus_errorUnsuportedMessage satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientFailure
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientFailure = _enum_for_ActualResponseStatus.errorTransientFailure satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = ActualResponseStatus_errorTransientFailure satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientSendingAddressUnresolved
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorTransientSendingAddressUnresolved satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved = ActualResponseStatus_errorTransientSendingAddressUnresolved satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientMessageNotFound
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientMessageNotFound = _enum_for_ActualResponseStatus.errorTransientMessageNotFound satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = ActualResponseStatus_errorTransientMessageNotFound satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientNetworkProblem
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientNetworkProblem = _enum_for_ActualResponseStatus.errorTransientNetworkProblem satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = ActualResponseStatus_errorTransientNetworkProblem satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientPartialSucess
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientPartialSucess = _enum_for_ActualResponseStatus.errorTransientPartialSucess satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSucess
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSucess = ActualResponseStatus_errorTransientPartialSucess satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentFailure
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentFailure = _enum_for_ActualResponseStatus.errorPermanentFailure satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = ActualResponseStatus_errorPermanentFailure satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentServiceDenied
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentServiceDenied = _enum_for_ActualResponseStatus.errorPermanentServiceDenied satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = ActualResponseStatus_errorPermanentServiceDenied satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentMessageFormatCorrupt
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentMessageFormatCorrupt = _enum_for_ActualResponseStatus.errorPermanentMessageFormatCorrupt satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = ActualResponseStatus_errorPermanentMessageFormatCorrupt satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentSendingAddressUnresolved
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorPermanentSendingAddressUnresolved satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved = ActualResponseStatus_errorPermanentSendingAddressUnresolved satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentMessageNotFound
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentMessageNotFound = _enum_for_ActualResponseStatus.errorPermanentMessageNotFound satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = ActualResponseStatus_errorPermanentMessageNotFound satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentContentNotAccepted
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentContentNotAccepted = _enum_for_ActualResponseStatus.errorPermanentContentNotAccepted satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted = ActualResponseStatus_errorPermanentContentNotAccepted satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet = _enum_for_ActualResponseStatus.errorPermanentReplyChargingLimitationsNotMet satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet = ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted = _enum_for_ActualResponseStatus.errorPermanentReplyChargingRequestNotAccepted satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted = ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingForwardingDenied = _enum_for_ActualResponseStatus.errorPermanentReplyChargingForwardingDenied satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied = ActualResponseStatus_errorPermanentReplyChargingForwardingDenied satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingNotSupported
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingNotSupported = _enum_for_ActualResponseStatus.errorPermanentReplyChargingNotSupported satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported = ActualResponseStatus_errorPermanentReplyChargingNotSupported satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentAddressHidingNotSupported
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentAddressHidingNotSupported = _enum_for_ActualResponseStatus.errorPermanentAddressHidingNotSupported satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported = ActualResponseStatus_errorPermanentAddressHidingNotSupported satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentLackOfPrepaid
 * @description
 * 
 * MMS response status named in annex B.15. Clause 15.3 does not further define
 * this code.
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentLackOfPrepaid = _enum_for_ActualResponseStatus.errorPermanentLackOfPrepaid satisfies ActualResponseStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid = ActualResponseStatus_errorPermanentLackOfPrepaid satisfies ActualResponseStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActualResponseStatus: $.ASN1Decoder<ActualResponseStatus> = $._decodeEnumerated;
export const _encode_ActualResponseStatus: $.ASN1Encoder<ActualResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
