/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CampOnCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CampOnCall  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck            ( 1),     -- optional parameters
 *     deviceIDOnly                 ( 2),     -- misc characteristics
 *     ackModelMultiStep             ( 3) }
 * ```
 */
export
type CampOnCall = BIT_STRING;

/**
 * @summary CampOnCall_privateData
 * @constant
 */
export
const CampOnCall_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CampOnCall_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CampOnCall_privateDataInAck
 * @constant
 */
export
const CampOnCall_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = CampOnCall_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary CampOnCall_deviceIDOnly
 * @constant
 */
export
const CampOnCall_deviceIDOnly: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deviceIDOnly
 * @constant
 */
export
const deviceIDOnly: number = CampOnCall_deviceIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary CampOnCall_ackModelMultiStep
 * @constant
 */
export
const CampOnCall_ackModelMultiStep: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = CampOnCall_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CampOnCall: $.ASN1Decoder<CampOnCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CampOnCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CampOnCall (el: _Element): CampOnCall {
    if (!_cached_decoder_for_CampOnCall) { _cached_decoder_for_CampOnCall = $._decodeBitString; }
    return _cached_decoder_for_CampOnCall(el);
}

let _cached_encoder_for_CampOnCall: $.ASN1Encoder<CampOnCall> | null = null;

/**
 * @summary Encodes a(n) CampOnCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CampOnCall, encoded as an ASN.1 Element.
 */
export
function _encode_CampOnCall (value: CampOnCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CampOnCall) { _cached_encoder_for_CampOnCall = $._encodeBitString; }
    return _cached_encoder_for_CampOnCall(value, elGetter);
}


/* eslint-enable */
