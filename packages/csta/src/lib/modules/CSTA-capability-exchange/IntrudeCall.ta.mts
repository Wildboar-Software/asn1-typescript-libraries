/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IntrudeCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntrudeCall  ::=  BIT STRING
 * {     participationTypeSilent         ( 0),     -- optional parameters
 *     participationTypeActive         ( 1),     -- optional parameters
 *     userData                 ( 2),     -- optional parameters
 *     privateData                 ( 3),     -- optional parameters
 *     conferencedCallInfoInAck         ( 4),     -- optional parameters
 *     privateDataInAck             ( 5),     -- optional parameters
 *     deviceIDOnly                 ( 6),     -- misc characteristics
 *     supportsConference             ( 7),     -- misc characteristics
 *     supportsAlternate             ( 8),     -- misc characteristics
 *     ackModelMultiStep             ( 9) }
 * ```
 */
export
type IntrudeCall = BIT_STRING;

/**
 * @summary IntrudeCall_participationTypeSilent
 * @constant
 */
export
const IntrudeCall_participationTypeSilent: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeSilent
 * @constant
 */
export
const participationTypeSilent: number = IntrudeCall_participationTypeSilent; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_participationTypeActive
 * @constant
 */
export
const IntrudeCall_participationTypeActive: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary participationTypeActive
 * @constant
 */
export
const participationTypeActive: number = IntrudeCall_participationTypeActive; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_userData
 * @constant
 */
export
const IntrudeCall_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = IntrudeCall_userData; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_privateData
 * @constant
 */
export
const IntrudeCall_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = IntrudeCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_conferencedCallInfoInAck
 * @constant
 */
export
const IntrudeCall_conferencedCallInfoInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary conferencedCallInfoInAck
 * @constant
 */
export
const conferencedCallInfoInAck: number = IntrudeCall_conferencedCallInfoInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_privateDataInAck
 * @constant
 */
export
const IntrudeCall_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = IntrudeCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_deviceIDOnly
 * @constant
 */
export
const IntrudeCall_deviceIDOnly: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = IntrudeCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_supportsConference
 * @constant
 */
export
const IntrudeCall_supportsConference: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supportsConference
 * @constant
 */
export
const supportsConference: number = IntrudeCall_supportsConference; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_supportsAlternate
 * @constant
 */
export
const IntrudeCall_supportsAlternate: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary supportsAlternate
 * @constant
 */
export
const supportsAlternate: number = IntrudeCall_supportsAlternate; /* SHORT_NAMED_BIT */

/**
 * @summary IntrudeCall_ackModelMultiStep
 * @constant
 */
export
const IntrudeCall_ackModelMultiStep: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = IntrudeCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IntrudeCall: $.ASN1Decoder<IntrudeCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntrudeCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntrudeCall (el: _Element): IntrudeCall {
    if (!_cached_decoder_for_IntrudeCall) { _cached_decoder_for_IntrudeCall = $._decodeBitString; }
    return _cached_decoder_for_IntrudeCall(el);
}

let _cached_encoder_for_IntrudeCall: $.ASN1Encoder<IntrudeCall> | null = null;

/**
 * @summary Encodes a(n) IntrudeCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntrudeCall, encoded as an ASN.1 Element.
 */
export
function _encode_IntrudeCall (value: IntrudeCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntrudeCall) { _cached_encoder_for_IntrudeCall = $._encodeBitString; }
    return _cached_encoder_for_IntrudeCall(value, elGetter);
}


/* eslint-enable */
