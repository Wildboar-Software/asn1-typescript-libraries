/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AcceptCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcceptCall  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3),     -- optional parameters
 *     deviceIDOnly                 ( 4),     -- misc characteristics
 *     ackModelMultiStep             ( 5) }
 * ```
 */
export
type AcceptCall = BIT_STRING;

/**
 * @summary AcceptCall_correlatorData
 * @constant
 */
export
const AcceptCall_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = AcceptCall_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_userData
 * @constant
 */
export
const AcceptCall_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = AcceptCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_privateData
 * @constant
 */
export
const AcceptCall_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AcceptCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_privateDataInAck
 * @constant
 */
export
const AcceptCall_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = AcceptCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_deviceIDOnly
 * @constant
 */
export
const AcceptCall_deviceIDOnly: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = AcceptCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary AcceptCall_ackModelMultiStep
 * @constant
 */
export
const AcceptCall_ackModelMultiStep: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = AcceptCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AcceptCall: $.ASN1Decoder<AcceptCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcceptCall (el: _Element): AcceptCall {
    if (!_cached_decoder_for_AcceptCall) { _cached_decoder_for_AcceptCall = $._decodeBitString; }
    return _cached_decoder_for_AcceptCall(el);
}

let _cached_encoder_for_AcceptCall: $.ASN1Encoder<AcceptCall> | null = null;

/**
 * @summary Encodes a(n) AcceptCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptCall, encoded as an ASN.1 Element.
 */
export
function _encode_AcceptCall (value: AcceptCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcceptCall) { _cached_encoder_for_AcceptCall = $._encodeBitString; }
    return _cached_encoder_for_AcceptCall(value, elGetter);
}


/* eslint-enable */
