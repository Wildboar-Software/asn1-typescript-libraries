/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReconnectCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReconnectCall  ::=  BIT STRING{
 *      alerting                 ( 0),     -- initial states
 *     connected                 ( 1),     -- initial states
 *     fail                     ( 2),     -- initial states
 *     initiated                 ( 3),     -- initial states
 *     queued                     ( 4),     -- initial states
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     ackModelMultiStep             ( 8) }
 * ```
 */
export
type ReconnectCall = BIT_STRING;

/**
 * @summary ReconnectCall_alerting
 * @constant
 */
export
const ReconnectCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = ReconnectCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_connected
 * @constant
 */
export
const ReconnectCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 */
export
const connected: number = ReconnectCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_fail
 * @constant
 */
export
const ReconnectCall_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 */
export
const fail: number = ReconnectCall_fail; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_initiated
 * @constant
 */
export
const ReconnectCall_initiated: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 */
export
const initiated: number = ReconnectCall_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_queued
 * @constant
 */
export
const ReconnectCall_queued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = ReconnectCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_privateData
 * @constant
 */
export
const ReconnectCall_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ReconnectCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_privateDataInAck
 * @constant
 */
export
const ReconnectCall_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ReconnectCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_deviceIDOnly
 * @constant
 */
export
const ReconnectCall_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = ReconnectCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_ackModelMultiStep
 * @constant
 */
export
const ReconnectCall_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ReconnectCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ReconnectCall: $.ASN1Decoder<ReconnectCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReconnectCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReconnectCall (el: _Element): ReconnectCall {
    if (!_cached_decoder_for_ReconnectCall) { _cached_decoder_for_ReconnectCall = $._decodeBitString; }
    return _cached_decoder_for_ReconnectCall(el);
}

let _cached_encoder_for_ReconnectCall: $.ASN1Encoder<ReconnectCall> | null = null;

/**
 * @summary Encodes a(n) ReconnectCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReconnectCall, encoded as an ASN.1 Element.
 */
export
function _encode_ReconnectCall (value: ReconnectCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReconnectCall) { _cached_encoder_for_ReconnectCall = $._encodeBitString; }
    return _cached_encoder_for_ReconnectCall(value, elGetter);
}


/* eslint-enable */
