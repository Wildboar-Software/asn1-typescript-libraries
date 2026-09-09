/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBack  ::=  BIT STRING
 * {     alerting                 ( 0),     -- initial states
 *     null                    ( 1),     -- initial states
 *     failed                     ( 2),     -- initial states
 *     queued                     ( 3),     -- initial states
 *     callCharacteristics             ( 4),     -- optional parameters
 *     subjectOfCall                (11),     -- optional parameters
 *     languagePreferences            (12),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     targetDeviceInAck             ( 6),     -- optional parameters
 *     privateDataInAck             ( 7),     -- optional parameters
 *     deviceIDOnly                 ( 8),     -- misc characteristics
 *     moreCallBacksNegAck             ( 9),     -- misc characteristics
 *     ackModelMultiStep             (10) }
 * ```
 */
export
type CallBack = BIT_STRING;

/**
 * @summary CallBack_alerting
 * @constant
 */
export
const CallBack_alerting: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary alerting
 * @constant
 */
export
const alerting: number = CallBack_alerting; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_null_
 * @constant
 */
export
const CallBack_null_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary null_
 * @constant
 */
export
const null_: number = CallBack_null_; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_failed
 * @constant
 */
export
const CallBack_failed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary failed
 * @constant
 */
export
const failed: number = CallBack_failed; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_queued
 * @constant
 */
export
const CallBack_queued: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary queued
 * @constant
 */
export
const queued: number = CallBack_queued; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_callCharacteristics
 * @constant
 */
export
const CallBack_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = CallBack_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_subjectOfCall
 * @constant
 */
export
const CallBack_subjectOfCall: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 */
export
const subjectOfCall: number = CallBack_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_languagePreferences
 * @constant
 */
export
const CallBack_languagePreferences: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = CallBack_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_privateData
 * @constant
 */
export
const CallBack_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallBack_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_targetDeviceInAck
 * @constant
 */
export
const CallBack_targetDeviceInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary targetDeviceInAck
 * @constant
 */
export
const targetDeviceInAck: number = CallBack_targetDeviceInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_privateDataInAck
 * @constant
 */
export
const CallBack_privateDataInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CallBack_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_deviceIDOnly
 * @constant
 */
export
const CallBack_deviceIDOnly: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = CallBack_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_moreCallBacksNegAck
 * @constant
 */
export
const CallBack_moreCallBacksNegAck: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary moreCallBacksNegAck
 * @constant
 */
export
const moreCallBacksNegAck: number = CallBack_moreCallBacksNegAck; /* SHORT_NAMED_BIT */

/**
 * @summary CallBack_ackModelMultiStep
 * @constant
 */
export
const CallBack_ackModelMultiStep: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CallBack_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBack: $.ASN1Decoder<CallBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBack (el: _Element): CallBack {
    if (!_cached_decoder_for_CallBack) { _cached_decoder_for_CallBack = $._decodeBitString; }
    return _cached_decoder_for_CallBack(el);
}

let _cached_encoder_for_CallBack: $.ASN1Encoder<CallBack> | null = null;

/**
 * @summary Encodes a(n) CallBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBack, encoded as an ASN.1 Element.
 */
export
function _encode_CallBack (value: CallBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBack) { _cached_encoder_for_CallBack = $._encodeBitString; }
    return _cached_encoder_for_CallBack(value, elGetter);
}


/* eslint-enable */
