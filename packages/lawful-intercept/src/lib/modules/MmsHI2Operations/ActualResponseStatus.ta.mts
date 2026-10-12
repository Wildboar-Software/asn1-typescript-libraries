/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_ok: ActualResponseStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ok
 * @constant
 * @type {number}
 */
export
const ok: ActualResponseStatus = ActualResponseStatus_ok; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorUnspecified
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorUnspecified: ActualResponseStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnspecified
 * @constant
 * @type {number}
 */
export
const errorUnspecified: ActualResponseStatus = ActualResponseStatus_errorUnspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorServiceDenied
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorServiceDenied: ActualResponseStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorServiceDenied
 * @constant
 * @type {number}
 */
export
const errorServiceDenied: ActualResponseStatus = ActualResponseStatus_errorServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorMessageFormatCorrupt: ActualResponseStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorMessageFormatCorrupt: ActualResponseStatus = ActualResponseStatus_errorMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorSendingAddressUnresolved: ActualResponseStatus = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorSendingAddressUnresolved: ActualResponseStatus = ActualResponseStatus_errorSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorMessageNotFound: ActualResponseStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorMessageNotFound: ActualResponseStatus = ActualResponseStatus_errorMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorNetworkProblem: ActualResponseStatus = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorNetworkProblem: ActualResponseStatus = ActualResponseStatus_errorNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorContentNotAccepted: ActualResponseStatus = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorContentNotAccepted: ActualResponseStatus = ActualResponseStatus_errorContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorUnsuportedMessage
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorUnsuportedMessage: ActualResponseStatus = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorUnsuportedMessage
 * @constant
 * @type {number}
 */
export
const errorUnsuportedMessage: ActualResponseStatus = ActualResponseStatus_errorUnsuportedMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientFailure
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientFailure: ActualResponseStatus = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientFailure
 * @constant
 * @type {number}
 */
export
const errorTransientFailure: ActualResponseStatus = ActualResponseStatus_errorTransientFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientSendingAddressUnresolved: ActualResponseStatus = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorTransientSendingAddressUnresolved: ActualResponseStatus = ActualResponseStatus_errorTransientSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientMessageNotFound: ActualResponseStatus = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorTransientMessageNotFound: ActualResponseStatus = ActualResponseStatus_errorTransientMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientNetworkProblem: ActualResponseStatus = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientNetworkProblem
 * @constant
 * @type {number}
 */
export
const errorTransientNetworkProblem: ActualResponseStatus = ActualResponseStatus_errorTransientNetworkProblem; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorTransientPartialSucess
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorTransientPartialSucess: ActualResponseStatus = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransientPartialSucess
 * @constant
 * @type {number}
 */
export
const errorTransientPartialSucess: ActualResponseStatus = ActualResponseStatus_errorTransientPartialSucess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentFailure: ActualResponseStatus = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentFailure
 * @constant
 * @type {number}
 */
export
const errorPermanentFailure: ActualResponseStatus = ActualResponseStatus_errorPermanentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentServiceDenied: ActualResponseStatus = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentServiceDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentServiceDenied: ActualResponseStatus = ActualResponseStatus_errorPermanentServiceDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentMessageFormatCorrupt: ActualResponseStatus = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageFormatCorrupt
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageFormatCorrupt: ActualResponseStatus = ActualResponseStatus_errorPermanentMessageFormatCorrupt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentSendingAddressUnresolved: ActualResponseStatus = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentSendingAddressUnresolved
 * @constant
 * @type {number}
 */
export
const errorPermanentSendingAddressUnresolved: ActualResponseStatus = ActualResponseStatus_errorPermanentSendingAddressUnresolved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentMessageNotFound: ActualResponseStatus = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentMessageNotFound
 * @constant
 * @type {number}
 */
export
const errorPermanentMessageNotFound: ActualResponseStatus = ActualResponseStatus_errorPermanentMessageNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentContentNotAccepted: ActualResponseStatus = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentContentNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentContentNotAccepted: ActualResponseStatus = ActualResponseStatus_errorPermanentContentNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet: ActualResponseStatus = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingLimitationsNotMet
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingLimitationsNotMet: ActualResponseStatus = ActualResponseStatus_errorPermanentReplyChargingLimitationsNotMet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted: ActualResponseStatus = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingRequestNotAccepted
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingRequestNotAccepted: ActualResponseStatus = ActualResponseStatus_errorPermanentReplyChargingRequestNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingForwardingDenied: ActualResponseStatus = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingForwardingDenied
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingForwardingDenied: ActualResponseStatus = ActualResponseStatus_errorPermanentReplyChargingForwardingDenied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentReplyChargingNotSupported: ActualResponseStatus = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentReplyChargingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentReplyChargingNotSupported: ActualResponseStatus = ActualResponseStatus_errorPermanentReplyChargingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentAddressHidingNotSupported: ActualResponseStatus = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentAddressHidingNotSupported
 * @constant
 * @type {number}
 */
export
const errorPermanentAddressHidingNotSupported: ActualResponseStatus = ActualResponseStatus_errorPermanentAddressHidingNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActualResponseStatus_errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const ActualResponseStatus_errorPermanentLackOfPrepaid: ActualResponseStatus = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorPermanentLackOfPrepaid
 * @constant
 * @type {number}
 */
export
const errorPermanentLackOfPrepaid: ActualResponseStatus = ActualResponseStatus_errorPermanentLackOfPrepaid; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ActualResponseStatus: $.ASN1Decoder<ActualResponseStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActualResponseStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActualResponseStatus (el: _Element): ActualResponseStatus {
    if (!_cached_decoder_for_ActualResponseStatus) { _cached_decoder_for_ActualResponseStatus = $._decodeEnumerated; }
    return _cached_decoder_for_ActualResponseStatus(el);
}

let _cached_encoder_for_ActualResponseStatus: $.ASN1Encoder<ActualResponseStatus> | null = null;

/**
 * @summary Encodes a(n) ActualResponseStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualResponseStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ActualResponseStatus (value: ActualResponseStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActualResponseStatus) { _cached_encoder_for_ActualResponseStatus = $._encodeEnumerated; }
    return _cached_encoder_for_ActualResponseStatus(value, elGetter);
}


/* eslint-enable */
