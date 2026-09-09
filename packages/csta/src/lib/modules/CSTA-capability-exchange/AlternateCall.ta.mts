/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AlternateCall
 * @description
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
 */
export
const AlternateCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = AlternateCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_hold
 * @constant
 */
export
const AlternateCall_hold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = AlternateCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_queued
 * @constant
 */
export
const AlternateCall_queued: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = AlternateCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_connectionReservation
 * @constant
 */
export
const AlternateCall_connectionReservation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connectionReservation
 * @constant
 */
export
const connectionReservation: number = AlternateCall_connectionReservation; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionConsultOnly
 * @constant
 */
export
const AlternateCall_consultOptionConsultOnly: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConsultOnly
 * @constant
 */
export
const consultOptionConsultOnly: number = AlternateCall_consultOptionConsultOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionTransferOnly
 * @constant
 */
export
const AlternateCall_consultOptionTransferOnly: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionTransferOnly
 * @constant
 */
export
const consultOptionTransferOnly: number = AlternateCall_consultOptionTransferOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionConferenceOnly
 * @constant
 */
export
const AlternateCall_consultOptionConferenceOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionConferenceOnly
 * @constant
 */
export
const consultOptionConferenceOnly: number = AlternateCall_consultOptionConferenceOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_consultOptionUnrestricted
 * @constant
 */
export
const AlternateCall_consultOptionUnrestricted: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary consultOptionUnrestricted
 * @constant
 */
export
const consultOptionUnrestricted: number = AlternateCall_consultOptionUnrestricted; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_privateData
 * @constant
 */
export
const AlternateCall_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AlternateCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_privateDataInAck
 * @constant
 */
export
const AlternateCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = AlternateCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_deviceIDOnly
 * @constant
 */
export
const AlternateCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = AlternateCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_ackModelMultiStep
 * @constant
 */
export
const AlternateCall_ackModelMultiStep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = AlternateCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary AlternateCall_supportsOfferedModeOfAlerting
 * @constant
 */
export
const AlternateCall_supportsOfferedModeOfAlerting: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
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
