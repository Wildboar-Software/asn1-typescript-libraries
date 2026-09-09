/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ClearCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClearCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     failed                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     initiated                 ( 4),     -- initial states
 *     hold                     ( 5),     -- initial states
 *     userData                 ( 6),     -- optional parameters
 *     privateData                 ( 7),     -- optional parameters
 *     privateDataInAck             ( 8),     -- optional parameters
 *     deviceIDOnly                 ( 9),     -- misc characteristics
 *     callIDOnly                 (10),     -- misc characteristics
 *     ackModelMultiStep             (11),     -- misc characteristics
 *     reason                    (12) }
 * ```
 */
export
type ClearCall = BIT_STRING;

/**
 * @summary ClearCall_alerting
 * @constant
 */
export
const ClearCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = ClearCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_connected
 * @constant
 */
export
const ClearCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = ClearCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_failed
 * @constant
 */
export
const ClearCall_failed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = ClearCall_failed; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_queued
 * @constant
 */
export
const ClearCall_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = ClearCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_initiated
 * @constant
 */
export
const ClearCall_initiated: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 */
export
const initiated: number = ClearCall_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_hold
 * @constant
 */
export
const ClearCall_hold: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary hold
 * @constant
 */
export
const hold: number = ClearCall_hold; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_userData
 * @constant
 */
export
const ClearCall_userData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = ClearCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_privateData
 * @constant
 */
export
const ClearCall_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ClearCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_privateDataInAck
 * @constant
 */
export
const ClearCall_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ClearCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_deviceIDOnly
 * @constant
 */
export
const ClearCall_deviceIDOnly: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = ClearCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_callIDOnly
 * @constant
 */
export
const ClearCall_callIDOnly: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 */
export
const callIDOnly: number = ClearCall_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_ackModelMultiStep
 * @constant
 */
export
const ClearCall_ackModelMultiStep: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ClearCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

/**
 * @summary ClearCall_reason
 * @constant
 */
export
const ClearCall_reason: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary reason
 * @constant
 */
export
const reason: number = ClearCall_reason; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ClearCall: $.ASN1Decoder<ClearCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClearCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClearCall (el: _Element): ClearCall {
    if (!_cached_decoder_for_ClearCall) { _cached_decoder_for_ClearCall = $._decodeBitString; }
    return _cached_decoder_for_ClearCall(el);
}

let _cached_encoder_for_ClearCall: $.ASN1Encoder<ClearCall> | null = null;

/**
 * @summary Encodes a(n) ClearCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClearCall, encoded as an ASN.1 Element.
 */
export
function _encode_ClearCall (value: ClearCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClearCall) { _cached_encoder_for_ClearCall = $._encodeBitString; }
    return _cached_encoder_for_ClearCall(value, elGetter);
}


/* eslint-enable */
