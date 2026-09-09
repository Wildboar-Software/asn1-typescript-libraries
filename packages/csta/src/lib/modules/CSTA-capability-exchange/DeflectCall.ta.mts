/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeflectCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeflectCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     failed                     ( 2),     -- initial states
 *     hold                     ( 3),     -- initial states
 *     queued                     ( 4),     -- initial states
 *     correlatorData                 ( 5),     -- optional parameters
 *     userData                 ( 6),     -- optional parameters
 *     subjectOfCall                (11),     -- optional parameters
 *     languagePreferences            (12),     -- optional parameters
 *     reason                    (13),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     deviceIDOnly                 ( 9),     -- misc characteristics
 *     ackModelMultiStep             (10),     -- misc characteristics
 *     callCharacteristicsinRequest        (14),     -- misc characteristics
 *     multipleDeviceIDsInNewDestination    (15) }
 * ```
 */
export
type DeflectCall = BIT_STRING;

/**
 * @summary DeflectCall_alerting
 * @constant
 */
export
const DeflectCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = DeflectCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_connected
 * @constant
 */
export
const DeflectCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = DeflectCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_failed
 * @constant
 */
export
const DeflectCall_failed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = DeflectCall_failed; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_hold
 * @constant
 */
export
const DeflectCall_hold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = DeflectCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_queued
 * @constant
 */
export
const DeflectCall_queued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = DeflectCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_correlatorData
 * @constant
 */
export
const DeflectCall_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = DeflectCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_userData
 * @constant
 */
export
const DeflectCall_userData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = DeflectCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_subjectOfCall
 * @constant
 */
export
const DeflectCall_subjectOfCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = DeflectCall_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_languagePreferences
 * @constant
 */
export
const DeflectCall_languagePreferences: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = DeflectCall_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_reason
 * @constant
 */
export
const DeflectCall_reason: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = DeflectCall_reason; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_privateData
 * @constant
 */
export
const DeflectCall_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DeflectCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_privateDataInAck
 * @constant
 */
export
const DeflectCall_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = DeflectCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_deviceIDOnly
 * @constant
 */
export
const DeflectCall_deviceIDOnly: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = DeflectCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_ackModelMultiStep
 * @constant
 */
export
const DeflectCall_ackModelMultiStep: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = DeflectCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_callCharacteristicsinRequest
 * @constant
 */
export
const DeflectCall_callCharacteristicsinRequest: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristicsinRequest
 * @constant
 */
export
const callCharacteristicsinRequest: number = DeflectCall_callCharacteristicsinRequest; /* SHORT_NAMED_BIT */

/**
 * @summary DeflectCall_multipleDeviceIDsInNewDestination
 * @constant
 */
export
const DeflectCall_multipleDeviceIDsInNewDestination: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary multipleDeviceIDsInNewDestination
 * @constant
 */
export
const multipleDeviceIDsInNewDestination: number = DeflectCall_multipleDeviceIDsInNewDestination; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeflectCall: $.ASN1Decoder<DeflectCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeflectCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeflectCall (el: _Element): DeflectCall {
    if (!_cached_decoder_for_DeflectCall) { _cached_decoder_for_DeflectCall = $._decodeBitString; }
    return _cached_decoder_for_DeflectCall(el);
}

let _cached_encoder_for_DeflectCall: $.ASN1Encoder<DeflectCall> | null = null;

/**
 * @summary Encodes a(n) DeflectCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeflectCall, encoded as an ASN.1 Element.
 */
export
function _encode_DeflectCall (value: DeflectCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeflectCall) { _cached_encoder_for_DeflectCall = $._encodeBitString; }
    return _cached_encoder_for_DeflectCall(value, elGetter);
}


/* eslint-enable */
