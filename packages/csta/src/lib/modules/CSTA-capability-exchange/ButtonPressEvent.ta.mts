/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ButtonPressEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonPressEvent  ::=  BIT STRING
 * {     buttonLabel                 ( 0),     -- optional parameters
 *     buttonAssociatedNumber             ( 1),     -- optional parameters
 *     privateData                 ( 2) }
 * ```
 */
export
type ButtonPressEvent = BIT_STRING;

/**
 * @summary ButtonPressEvent_buttonLabel
 * @constant
 */
export
const ButtonPressEvent_buttonLabel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabel
 * @constant
 */
export
const buttonLabel: number = ButtonPressEvent_buttonLabel; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonPressEvent_buttonAssociatedNumber
 * @constant
 */
export
const ButtonPressEvent_buttonAssociatedNumber: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumber
 * @constant
 */
export
const buttonAssociatedNumber: number = ButtonPressEvent_buttonAssociatedNumber; /* SHORT_NAMED_BIT */

/**
 * @summary ButtonPressEvent_privateData
 * @constant
 */
export
const ButtonPressEvent_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ButtonPressEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ButtonPressEvent: $.ASN1Decoder<ButtonPressEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonPressEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonPressEvent (el: _Element): ButtonPressEvent {
    if (!_cached_decoder_for_ButtonPressEvent) { _cached_decoder_for_ButtonPressEvent = $._decodeBitString; }
    return _cached_decoder_for_ButtonPressEvent(el);
}

let _cached_encoder_for_ButtonPressEvent: $.ASN1Encoder<ButtonPressEvent> | null = null;

/**
 * @summary Encodes a(n) ButtonPressEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonPressEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonPressEvent (value: ButtonPressEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonPressEvent) { _cached_encoder_for_ButtonPressEvent = $._encodeBitString; }
    return _cached_encoder_for_ButtonPressEvent(value, elGetter);
}


/* eslint-enable */
