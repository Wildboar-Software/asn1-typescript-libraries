/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DirectedPickupCall
 * @description
 * Capability bitmap for the Directed Pickup Call service (ECMA-269 C.5.13,
 * ECMA-285 §9.10). Presence of this entry in `CallControlServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectedPickupCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     hold                     ( 1),     -- initial states
 *     queued                     ( 2),     -- initial states
 *     connected                 ( 3),     -- initial states
 *     correlatorData                 ( 4),     -- optional parameters
 *     userData                 ( 5),     -- optional parameters
 *     privateData                 ( 6),     -- optional parameters
 *     pickedCallInAck             ( 7),     -- optional parameters
 *     pickedCallInfoInAck             ( 8),     -- optional parameters
 *     privateDataInAck             ( 9),     -- optional parameters
 *     deviceIDOnly                 (10),     -- misc characteristics
 *     supportsOfferedModeOfAlerting         (11),     -- misc characteristics
 *     supportsPrompting             (12),     -- misc characteristics
 *     promptingMode                 (13),     -- misc characteristics
 *     ackModelMultiStep             (14) }
 * ```
 */
export
type DirectedPickupCall = BIT_STRING;

/**
 * @summary DirectedPickupCall_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `DirectedPickupCall_alerting`.
 */
export
const alerting: number = DirectedPickupCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_hold: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `DirectedPickupCall_hold`.
 */
export
const hold: number = DirectedPickupCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_queued: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `DirectedPickupCall_queued`.
 */
export
const queued: number = DirectedPickupCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_connected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `DirectedPickupCall_connected`.
 */
export
const connected: number = DirectedPickupCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_correlatorData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `DirectedPickupCall_correlatorData`.
 */
export
const correlatorData: number = DirectedPickupCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_userData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `DirectedPickupCall_userData`.
 */
export
const userData: number = DirectedPickupCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `DirectedPickupCall_privateData`.
 */
export
const privateData: number = DirectedPickupCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_pickedCallInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pickedCall` in the acknowledgement
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_pickedCallInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInAck
 * @constant
 * @description
 * Alias of `DirectedPickupCall_pickedCallInAck`.
 */
export
const pickedCallInAck: number = DirectedPickupCall_pickedCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_pickedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pickedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_pickedCallInfoInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInfoInAck
 * @constant
 * @description
 * Alias of `DirectedPickupCall_pickedCallInfoInAck`.
 */
export
const pickedCallInfoInAck: number = DirectedPickupCall_pickedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_privateDataInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `DirectedPickupCall_privateDataInAck`.
 */
export
const privateDataInAck: number = DirectedPickupCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_deviceIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `DirectedPickupCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = DirectedPickupCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Bit set means the SF supports Offered mode of alerting (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_supportsOfferedModeOfAlerting: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Alias of `DirectedPickupCall_supportsOfferedModeOfAlerting`.
 */
export
const supportsOfferedModeOfAlerting: number = DirectedPickupCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_supportsPrompting
 * @constant
 * @description
 * Bit set means the SF supports prompting for the calling device (ECMA-269
 * C.5.13).
 */
export
const DirectedPickupCall_supportsPrompting: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 * @description
 * Alias of `DirectedPickupCall_supportsPrompting`.
 */
export
const supportsPrompting: number = DirectedPickupCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_promptingMode
 * @constant
 * @description
 * Bit set means the SF supports prompting as part of service execution
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_promptingMode: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 * @description
 * Alias of `DirectedPickupCall_promptingMode`.
 */
export
const promptingMode: number = DirectedPickupCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary DirectedPickupCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.13).
 */
export
const DirectedPickupCall_ackModelMultiStep: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `DirectedPickupCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = DirectedPickupCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DirectedPickupCall: $.ASN1Decoder<DirectedPickupCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectedPickupCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectedPickupCall (el: _Element): DirectedPickupCall {
    if (!_cached_decoder_for_DirectedPickupCall) { _cached_decoder_for_DirectedPickupCall = $._decodeBitString; }
    return _cached_decoder_for_DirectedPickupCall(el);
}

let _cached_encoder_for_DirectedPickupCall: $.ASN1Encoder<DirectedPickupCall> | null = null;

/**
 * @summary Encodes a(n) DirectedPickupCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectedPickupCall, encoded as an ASN.1 Element.
 */
export
function _encode_DirectedPickupCall (value: DirectedPickupCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectedPickupCall) { _cached_encoder_for_DirectedPickupCall = $._encodeBitString; }
    return _cached_encoder_for_DirectedPickupCall(value, elGetter);
}


/* eslint-enable */
