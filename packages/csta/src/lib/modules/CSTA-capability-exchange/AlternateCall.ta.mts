/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AlternateCall
 * @description
 * Capability bitmap for the Alternate Call service (ECMA-269 C.5.2, ECMA-285
 * §9.10). Presence of this entry in `CallControlServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states heldCall
 *     hold                     ( 1),     -- initial states heldCall
 *     queued                     ( 2),     -- initial states heldCall
 *     connectionReservation             ( 3),     -- optional parameters
 *     consultOptionConsultOnly         ( 4),     -- optional parameters
 *     consultOptionTransferOnly         ( 5),     -- optional parameters
 *     consultOptionConferenceOnly         ( 6),     -- optional parameters
 *     consultOptionUnrestricted         ( 7),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     ackModelMultiStep             (11),     -- misc characteristics
 *     supportsOfferedModeOfAlerting         (12) }
 * ```
 */
export
type AlternateCall = BIT_STRING;

/**
 * @summary AlternateCall_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.2).
 */
export
const AlternateCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `AlternateCall_alerting`.
 */
export
const alerting: number = AlternateCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269 C.5.2).
 */
export
const AlternateCall_hold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `AlternateCall_hold`.
 */
export
const hold: number = AlternateCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.2).
 */
export
const AlternateCall_queued: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `AlternateCall_queued`.
 */
export
const queued: number = AlternateCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_connectionReservation
 * @constant
 * @description
 * Bit set means the SF supports the optional `connectionReservation` parameter
 * (ECMA-269 C.5.2).
 */
export
const AlternateCall_connectionReservation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 * @description
 * Alias of `AlternateCall_connectionReservation`.
 */
export
const connectionReservation: number = AlternateCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionConsultOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.2).
 */
export
const AlternateCall_consultOptionConsultOnly: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConsultOnly
 * @constant
 * @description
 * Alias of `AlternateCall_consultOptionConsultOnly`.
 */
export
const consultOptionConsultOnly: number = AlternateCall_consultOptionConsultOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionTransferOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.2).
 */
export
const AlternateCall_consultOptionTransferOnly: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionTransferOnly
 * @constant
 * @description
 * Alias of `AlternateCall_consultOptionTransferOnly`.
 */
export
const consultOptionTransferOnly: number = AlternateCall_consultOptionTransferOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionConferenceOnly
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.2).
 */
export
const AlternateCall_consultOptionConferenceOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConferenceOnly
 * @constant
 * @description
 * Alias of `AlternateCall_consultOptionConferenceOnly`.
 */
export
const consultOptionConferenceOnly: number = AlternateCall_consultOptionConferenceOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionUnrestricted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.2).
 */
export
const AlternateCall_consultOptionUnrestricted: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionUnrestricted
 * @constant
 * @description
 * Alias of `AlternateCall_consultOptionUnrestricted`.
 */
export
const consultOptionUnrestricted: number = AlternateCall_consultOptionUnrestricted; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.2).
 */
export
const AlternateCall_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AlternateCall_privateData`.
 */
export
const privateData: number = AlternateCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.2).
 */
export
const AlternateCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `AlternateCall_privateDataInAck`.
 */
export
const privateDataInAck: number = AlternateCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.2).
 */
export
const AlternateCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `AlternateCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = AlternateCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.2).
 */
export
const AlternateCall_ackModelMultiStep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `AlternateCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = AlternateCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Bit set means the SF supports Offered mode of alerting (ECMA-269 C.5.2).
 */
export
const AlternateCall_supportsOfferedModeOfAlerting: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Alias of `AlternateCall_supportsOfferedModeOfAlerting`.
 */
export
const supportsOfferedModeOfAlerting: number = AlternateCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AlternateCall: $.ASN1Decoder<AlternateCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateCall (el: _Element): AlternateCall {
    if (!_cached_decoder_for_AlternateCall) { _cached_decoder_for_AlternateCall = $._decodeBitString; }
    return _cached_decoder_for_AlternateCall(el);
}

let _cached_encoder_for_AlternateCall: $.ASN1Encoder<AlternateCall> | null = null;

/**
 * @summary Encodes a(n) AlternateCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateCall, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateCall (value: AlternateCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateCall) { _cached_encoder_for_AlternateCall = $._encodeBitString; }
    return _cached_encoder_for_AlternateCall(value, elGetter);
}


/* eslint-enable */
