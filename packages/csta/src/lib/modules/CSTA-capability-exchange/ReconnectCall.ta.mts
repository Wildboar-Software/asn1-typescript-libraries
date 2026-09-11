/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReconnectCall
 * @description
 * Capability bitmap for the Reconnect Call service (ECMA-269 C.5.22, ECMA-285
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
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `ReconnectCall_alerting`.
 */
export
const alerting: number = ReconnectCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_connected
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Connected (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_connected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary connected
 * @constant
 * @description
 * Alias of `ReconnectCall_connected`.
 */
export
const connected: number = ReconnectCall_connected; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_fail
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Fail (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_fail: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary fail
 * @constant
 * @description
 * Alias of `ReconnectCall_fail`.
 */
export
const fail: number = ReconnectCall_fail; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_initiated
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Initiated (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_initiated: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 * @description
 * Alias of `ReconnectCall_initiated`.
 */
export
const initiated: number = ReconnectCall_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_queued: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `ReconnectCall_queued`.
 */
export
const queued: number = ReconnectCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.22).
 */
export
const ReconnectCall_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ReconnectCall_privateData`.
 */
export
const privateData: number = ReconnectCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.22).
 */
export
const ReconnectCall_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ReconnectCall_privateDataInAck`.
 */
export
const privateDataInAck: number = ReconnectCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.22).
 */
export
const ReconnectCall_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `ReconnectCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = ReconnectCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary ReconnectCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.22).
 */
export
const ReconnectCall_ackModelMultiStep: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `ReconnectCall_ackModelMultiStep`.
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
