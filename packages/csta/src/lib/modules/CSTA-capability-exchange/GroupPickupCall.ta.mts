/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GroupPickupCall
 * @description
 * Capability bitmap for the Group Pickup Call service (ECMA-269 C.5.14,
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
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `GroupPickupCall_alerting`.
 */
export
const alerting: number = GroupPickupCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `GroupPickupCall_connected`.
 */
export
const connected: number = GroupPickupCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_hold
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Hold (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_hold: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 * @description
 * Alias of `GroupPickupCall_hold`.
 */
export
const hold: number = GroupPickupCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `GroupPickupCall_queued`.
 */
export
const queued: number = GroupPickupCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickGroup
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_pickGroup: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pickGroup
 * @constant
 * @description
 * Alias of `GroupPickupCall_pickGroup`.
 */
export
const pickGroup: number = GroupPickupCall_pickGroup; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_correlatorData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `GroupPickupCall_correlatorData`.
 */
export
const correlatorData: number = GroupPickupCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_userData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `GroupPickupCall_userData`.
 */
export
const userData: number = GroupPickupCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GroupPickupCall_privateData`.
 */
export
const privateData: number = GroupPickupCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickedCallInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pickedCall` in the acknowledgement
 * (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_pickedCallInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInAck
 * @constant
 * @description
 * Alias of `GroupPickupCall_pickedCallInAck`.
 */
export
const pickedCallInAck: number = GroupPickupCall_pickedCallInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_pickedCallInfoInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `pickedCallInfo` in the
 * acknowledgement (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_pickedCallInfoInAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary pickedCallInfoInAck
 * @constant
 * @description
 * Alias of `GroupPickupCall_pickedCallInfoInAck`.
 */
export
const pickedCallInfoInAck: number = GroupPickupCall_pickedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_privateDataInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GroupPickupCall_privateDataInAck`.
 */
export
const privateDataInAck: number = GroupPickupCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_supportsPrompting
 * @constant
 * @description
 * Bit set means the SF supports prompting for the calling device (ECMA-269
 * C.5.14).
 */
export
const GroupPickupCall_supportsPrompting: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary supportsPrompting
 * @constant
 * @description
 * Alias of `GroupPickupCall_supportsPrompting`.
 */
export
const supportsPrompting: number = GroupPickupCall_supportsPrompting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_promptingMode
 * @constant
 * @description
 * Bit set means the SF supports prompting as part of service execution
 * (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_promptingMode: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary promptingMode
 * @constant
 * @description
 * Alias of `GroupPickupCall_promptingMode`.
 */
export
const promptingMode: number = GroupPickupCall_promptingMode; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Bit set means the SF supports Offered mode of alerting (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_supportsOfferedModeOfAlerting: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Alias of `GroupPickupCall_supportsOfferedModeOfAlerting`.
 */
export
const supportsOfferedModeOfAlerting: number = GroupPickupCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary GroupPickupCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.14).
 */
export
const GroupPickupCall_ackModelMultiStep: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `GroupPickupCall_ackModelMultiStep`.
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
