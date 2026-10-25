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
const ActualResponseStatus_ok = _enum_for_ActualResponseStatus.ok; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const ok = ActualResponseStatus_ok; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorUnspecified = _enum_for_ActualResponseStatus.errorUnspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorUnspecified = ActualResponseStatus_errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorServiceDenied = _enum_for_ActualResponseStatus.errorServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorServiceDenied = ActualResponseStatus_errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorMessageFormatCorrupt = _enum_for_ActualResponseStatus.errorMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt = ActualResponseStatus_errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved = ActualResponseStatus_errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorMessageNotFound = _enum_for_ActualResponseStatus.errorMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound = ActualResponseStatus_errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorNetworkProblem = _enum_for_ActualResponseStatus.errorNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem = ActualResponseStatus_errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorContentNotAccepted = _enum_for_ActualResponseStatus.errorContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted = ActualResponseStatus_errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorUnsuportedMessage = _enum_for_ActualResponseStatus.errorUnsuportedMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsuportedMessage
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorUnsuportedMessage = ActualResponseStatus_errorUnsuportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorTransientFailure = _enum_for_ActualResponseStatus.errorTransientFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientFailure = ActualResponseStatus_errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorTransientSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorTransientSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved = ActualResponseStatus_errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorTransientMessageNotFound = _enum_for_ActualResponseStatus.errorTransientMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound = ActualResponseStatus_errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorTransientNetworkProblem = _enum_for_ActualResponseStatus.errorTransientNetworkProblem; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem = ActualResponseStatus_errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorTransientPartialSucess = _enum_for_ActualResponseStatus.errorTransientPartialSucess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSucess
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSucess = ActualResponseStatus_errorTransientPartialSucess; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentFailure = _enum_for_ActualResponseStatus.errorPermanentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure = ActualResponseStatus_errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentServiceDenied = _enum_for_ActualResponseStatus.errorPermanentServiceDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied = ActualResponseStatus_errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentMessageFormatCorrupt = _enum_for_ActualResponseStatus.errorPermanentMessageFormatCorrupt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt = ActualResponseStatus_errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentSendingAddressUnresolved = _enum_for_ActualResponseStatus.errorPermanentSendingAddressUnresolved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved = ActualResponseStatus_errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentMessageNotFound = _enum_for_ActualResponseStatus.errorPermanentMessageNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound = ActualResponseStatus_errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentContentNotAccepted = _enum_for_ActualResponseStatus.errorPermanentContentNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted = ActualResponseStatus_errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet = _enum_for_ActualResponseStatus.errorPermanentReplyChargingLimitationsNotMet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet = ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted = _enum_for_ActualResponseStatus.errorPermanentReplyChargingRequestNotAccepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted = ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentReplyChargingForwardingDenied = _enum_for_ActualResponseStatus.errorPermanentReplyChargingForwardingDenied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied = ActualResponseStatus_errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentReplyChargingNotSupported = _enum_for_ActualResponseStatus.errorPermanentReplyChargingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported = ActualResponseStatus_errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentAddressHidingNotSupported = _enum_for_ActualResponseStatus.errorPermanentAddressHidingNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported = ActualResponseStatus_errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const ActualResponseStatus_errorPermanentLackOfPrepaid = _enum_for_ActualResponseStatus.errorPermanentLackOfPrepaid; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @description
 * 
 * Clause 15.3 does not further define this response status.
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid = ActualResponseStatus_errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ActualResponseStatus: $.ASN1Decoder<ActualResponseStatus> = $._decodeEnumerated;
export const _encode_ActualResponseStatus: $.ASN1Encoder<ActualResponseStatus> = $._encodeEnumerated;


/* eslint-enable */
