/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallBackMessageEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessageEvent  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type CallBackMessageEvent = BIT_STRING;

/**
 * @summary CallBackMessageEvent_privateData
 * @constant
 */
export
const CallBackMessageEvent_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = CallBackMessageEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallBackMessageEvent: $.ASN1Decoder<CallBackMessageEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessageEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessageEvent (el: _Element): CallBackMessageEvent {
    if (!_cached_decoder_for_CallBackMessageEvent) { _cached_decoder_for_CallBackMessageEvent = $._decodeBitString; }
    return _cached_decoder_for_CallBackMessageEvent(el);
}

let _cached_encoder_for_CallBackMessageEvent: $.ASN1Encoder<CallBackMessageEvent> | null = null;

/**
 * @summary Encodes a(n) CallBackMessageEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessageEvent, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessageEvent (value: CallBackMessageEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessageEvent) { _cached_encoder_for_CallBackMessageEvent = $._encodeBitString; }
    return _cached_encoder_for_CallBackMessageEvent(value, elGetter);
}


/* eslint-enable */
