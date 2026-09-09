/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GroupPickupCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupPickupCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     hold                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     pickGroup                 ( 4),     -- optional parameters
 *     correlatorData                 ( 5),     -- optional parameters
 *     userData                 ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     pickedCallInAck             ( 8),     -- optional parameters
 *     pickedCallInfoInAck             ( 9),     -- optional parameters
 *     privateDataInAck             (10),     -- optional parameters
 *     supportsPrompting             (11),     -- misc characteristics
 *     promptingMode                 (12),     -- misc characteristics
 *     supportsOfferedModeOfAlerting        (13),     -- misc characteristics
 *     ackModelMultiStep             (14) }
 * ```
 */
export
type GroupPickupCall = BIT_STRING;

/**
 * @summary GroupPickupCall_alerting
 * @constant
 */
export
const GroupPickupCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = GroupPickupCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_connected
 * @constant
 */
export
const GroupPickupCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = GroupPickupCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_hold
 * @constant
 */
export
const GroupPickupCall_hold: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = GroupPickupCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_queued
 * @constant
 */
export
const GroupPickupCall_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = GroupPickupCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickGroup
 * @constant
 */
export
const GroupPickupCall_pickGroup: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pickGroup
 * @constant
 */
export
const pickGroup: number = GroupPickupCall_pickGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_correlatorData
 * @constant
 */
export
const GroupPickupCall_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = GroupPickupCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_userData
 * @constant
 */
export
const GroupPickupCall_userData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = GroupPickupCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_privateData
 * @constant
 */
export
const GroupPickupCall_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GroupPickupCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickedCallInAck
 * @constant
 */
export
const GroupPickupCall_pickedCallInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInAck
 * @constant
 */
export
const pickedCallInAck: number = GroupPickupCall_pickedCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickedCallInfoInAck
 * @constant
 */
export
const GroupPickupCall_pickedCallInfoInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInfoInAck
 * @constant
 */
export
const pickedCallInfoInAck: number = GroupPickupCall_pickedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_privateDataInAck
 * @constant
 */
export
const GroupPickupCall_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GroupPickupCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_supportsPrompting
 * @constant
 */
export
const GroupPickupCall_supportsPrompting: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 */
export
const supportsPrompting: number = GroupPickupCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_promptingMode
 * @constant
 */
export
const GroupPickupCall_promptingMode: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 */
export
const promptingMode: number = GroupPickupCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_supportsOfferedModeOfAlerting
 * @constant
 */
export
const GroupPickupCall_supportsOfferedModeOfAlerting: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 */
export
const supportsOfferedModeOfAlerting: number = GroupPickupCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_ackModelMultiStep
 * @constant
 */
export
const GroupPickupCall_ackModelMultiStep: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = GroupPickupCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GroupPickupCall: $.ASN1Decoder<GroupPickupCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupPickupCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupPickupCall (el: _Element): GroupPickupCall {
    if (!_cached_decoder_for_GroupPickupCall) { _cached_decoder_for_GroupPickupCall = $._decodeBitString; }
    return _cached_decoder_for_GroupPickupCall(el);
}

let _cached_encoder_for_GroupPickupCall: $.ASN1Encoder<GroupPickupCall> | null = null;

/**
 * @summary Encodes a(n) GroupPickupCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupPickupCall, encoded as an ASN.1 Element.
 */
export
function _encode_GroupPickupCall (value: GroupPickupCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupPickupCall) { _cached_encoder_for_GroupPickupCall = $._encodeBitString; }
    return _cached_encoder_for_GroupPickupCall(value, elGetter);
}


/* eslint-enable */
