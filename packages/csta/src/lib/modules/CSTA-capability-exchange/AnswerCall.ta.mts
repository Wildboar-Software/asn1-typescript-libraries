/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AnswerCall
 * @description
 * Capability bitmap for the Answer Call service (ECMA-269 C.5.3, ECMA-285
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
 * AnswerCall  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     initiated                 ( 1),     -- initial states
 *     queued                     ( 2),     -- initial states
 *     correlatorData                 ( 3),     -- optional parameters
 *     userData                 ( 4),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     supportsOfferedModeOfAlerting         ( 8),     -- misc characteristics
 *     ackModelMultiStep             ( 9) }
 * ```
 */
export
type AnswerCall = BIT_STRING;

/**
 * @summary AnswerCall_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.3).
 */
export
const AnswerCall_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `AnswerCall_alerting`.
 */
export
const alerting: number = AnswerCall_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_initiated
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Initiated (ECMA-269
 * C.5.3).
 */
export
const AnswerCall_initiated: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary initiated
 * @constant
 * @description
 * Alias of `AnswerCall_initiated`.
 */
export
const initiated: number = AnswerCall_initiated; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.3).
 */
export
const AnswerCall_queued: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `AnswerCall_queued`.
 */
export
const queued: number = AnswerCall_queued; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.5.3).
 */
export
const AnswerCall_correlatorData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `AnswerCall_correlatorData`.
 */
export
const correlatorData: number = AnswerCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.5.3).
 */
export
const AnswerCall_userData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `AnswerCall_userData`.
 */
export
const userData: number = AnswerCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.3).
 */
export
const AnswerCall_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AnswerCall_privateData`.
 */
export
const privateData: number = AnswerCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.3).
 */
export
const AnswerCall_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `AnswerCall_privateDataInAck`.
 */
export
const privateDataInAck: number = AnswerCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.3).
 */
export
const AnswerCall_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `AnswerCall_deviceIDOnly`.
 */
export
const deviceIDOnly: number = AnswerCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Bit set means the SF supports Offered mode of alerting (ECMA-269 C.5.3).
 */
export
const AnswerCall_supportsOfferedModeOfAlerting: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportsOfferedModeOfAlerting
 * @constant
 * @description
 * Alias of `AnswerCall_supportsOfferedModeOfAlerting`.
 */
export
const supportsOfferedModeOfAlerting: number = AnswerCall_supportsOfferedModeOfAlerting; /* SHORT_NAMED_BIT */

/**
 * @summary AnswerCall_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.3).
 */
export
const AnswerCall_ackModelMultiStep: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `AnswerCall_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = AnswerCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AnswerCall: $.ASN1Decoder<AnswerCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnswerCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnswerCall (el: _Element): AnswerCall {
    if (!_cached_decoder_for_AnswerCall) { _cached_decoder_for_AnswerCall = $._decodeBitString; }
    return _cached_decoder_for_AnswerCall(el);
}

let _cached_encoder_for_AnswerCall: $.ASN1Encoder<AnswerCall> | null = null;

/**
 * @summary Encodes a(n) AnswerCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnswerCall, encoded as an ASN.1 Element.
 */
export
function _encode_AnswerCall (value: AnswerCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnswerCall) { _cached_encoder_for_AnswerCall = $._encodeBitString; }
    return _cached_encoder_for_AnswerCall(value, elGetter);
}


/* eslint-enable */
