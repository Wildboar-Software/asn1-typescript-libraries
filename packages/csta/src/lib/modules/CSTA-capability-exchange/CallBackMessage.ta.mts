/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBackMessage
 * @description
 * Capability bitmap for the Call Back Message Call-Related service (ECMA-269
 * C.5.5, ECMA-285 §9.10). Presence of this entry in `CallControlServList` means
 * the SF supports that service. Each set bit is an optional parameter,
 * enumerated value, initial connection state, or miscellaneous characteristic
 * from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessage  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     null                     ( 1),     -- initial states
 *     failed                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     privateData                 ( 4),     -- optional parameters
 *     targetDeviceInAck             ( 5),     -- optional parameters
 *     privateDataInAck             ( 6),     -- optional parameters
 *     deviceIDOnly                 ( 7),     -- misc characteristics
 *     moreCallBacksNegAck             ( 8),     -- misc characteristics
 *     ackModelMultiStep             ( 9) }
 * ```
 */
export
type CallBackMessage = BIT_STRING;

/**
 * @summary CallBackMessage_alerting
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Alerting (ECMA-269
 * C.5.5).
 */
export
const CallBackMessage_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 * @description
 * Alias of `CallBackMessage_alerting`.
 */
export
const alerting: number = CallBackMessage_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_null_
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Null (ECMA-269 C.5.5).
 */
export
const CallBackMessage_null_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 * @description
 * Alias of `CallBackMessage_null_`.
 */
export
const null_: number = CallBackMessage_null_; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_failed
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Fail (ECMA-269 C.5.5).
 */
export
const CallBackMessage_failed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 * @description
 * Alias of `CallBackMessage_failed`.
 */
export
const failed: number = CallBackMessage_failed; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_queued
 * @constant
 * @description
 * Bit set means the SF supports initial connection state Queued (ECMA-269
 * C.5.5).
 */
export
const CallBackMessage_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 * @description
 * Alias of `CallBackMessage_queued`.
 */
export
const queued: number = CallBackMessage_queued; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.5.5).
 */
export
const CallBackMessage_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallBackMessage_privateData`.
 */
export
const privateData: number = CallBackMessage_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_targetDeviceInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `targetDevice` in the acknowledgement
 * (ECMA-269 C.5.5).
 */
export
const CallBackMessage_targetDeviceInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary targetDeviceInAck
 * @constant
 * @description
 * Alias of `CallBackMessage_targetDeviceInAck`.
 */
export
const targetDeviceInAck: number = CallBackMessage_targetDeviceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.5.5).
 */
export
const CallBackMessage_privateDataInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CallBackMessage_privateDataInAck`.
 */
export
const privateDataInAck: number = CallBackMessage_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_deviceIDOnly
 * @constant
 * @description
 * Bit set means the SF supports DeviceID-only ConnectionIDs for this service
 * (ECMA-269 C.5.5).
 */
export
const CallBackMessage_deviceIDOnly: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 * @description
 * Alias of `CallBackMessage_deviceIDOnly`.
 */
export
const deviceIDOnly: number = CallBackMessage_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_moreCallBacksNegAck
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.5.5).
 */
export
const CallBackMessage_moreCallBacksNegAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary moreCallBacksNegAck
 * @constant
 * @description
 * Alias of `CallBackMessage_moreCallBacksNegAck`.
 */
export
const moreCallBacksNegAck: number = CallBackMessage_moreCallBacksNegAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBackMessage_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.5.5).
 */
export
const CallBackMessage_ackModelMultiStep: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `CallBackMessage_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = CallBackMessage_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackMessage: $.ASN1Decoder<CallBackMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessage (el: _Element): CallBackMessage {
    if (!_cached_decoder_for_CallBackMessage) { _cached_decoder_for_CallBackMessage = $._decodeBitString; }
    return _cached_decoder_for_CallBackMessage(el);
}

let _cached_encoder_for_CallBackMessage: $.ASN1Encoder<CallBackMessage> | null = null;

/**
 * @summary Encodes a(n) CallBackMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessage, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessage (value: CallBackMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessage) { _cached_encoder_for_CallBackMessage = $._encodeBitString; }
    return _cached_encoder_for_CallBackMessage(value, elGetter);
}


/* eslint-enable */
