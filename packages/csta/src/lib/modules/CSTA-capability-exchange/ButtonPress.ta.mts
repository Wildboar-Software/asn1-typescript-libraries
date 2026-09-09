/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ButtonPress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonPress  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type ButtonPress = BIT_STRING;

/**
 * @summary ButtonPress_privateData
 * @constant
 */
export
const ButtonPress_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ButtonPress_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonPress_privateDataInAck
 * @constant
 */
export
const ButtonPress_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = ButtonPress_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonPress_ackModelMultiStep
 * @constant
 */
export
const ButtonPress_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = ButtonPress_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ButtonPress: $.ASN1Decoder<ButtonPress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonPress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonPress (el: _Element): ButtonPress {
    if (!_cached_decoder_for_ButtonPress) { _cached_decoder_for_ButtonPress = $._decodeBitString; }
    return _cached_decoder_for_ButtonPress(el);
}

let _cached_encoder_for_ButtonPress: $.ASN1Encoder<ButtonPress> | null = null;

/**
 * @summary Encodes a(n) ButtonPress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonPress, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonPress (value: ButtonPress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonPress) { _cached_encoder_for_ButtonPress = $._encodeBitString; }
    return _cached_encoder_for_ButtonPress(value, elGetter);
}


/* eslint-enable */
