/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StopEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopEvent  ::=  BIT STRING
 * {     message                    ( 6),     -- optional parameters
 *     resource                ( 7),     -- optional parameters
 *     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     speed                     ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     servicesPermitted             ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type StopEvent = BIT_STRING;

/**
 * @summary StopEvent_message
 * @constant
 */
export
const StopEvent_message: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = StopEvent_message; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_resource
 * @constant
 */
export
const StopEvent_resource: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = StopEvent_resource; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_length
 * @constant
 */
export
const StopEvent_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = StopEvent_length; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_currentPosition
 * @constant
 */
export
const StopEvent_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = StopEvent_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_speed
 * @constant
 */
export
const StopEvent_speed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speed
 * @constant
 */
export
const speed: number = StopEvent_speed; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_cause
 * @constant
 */
export
const StopEvent_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = StopEvent_cause; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_servicesPermitted
 * @constant
 */
export
const StopEvent_servicesPermitted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = StopEvent_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary StopEvent_privateData
 * @constant
 */
export
const StopEvent_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = StopEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopEvent: $.ASN1Decoder<StopEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopEvent (el: _Element): StopEvent {
    if (!_cached_decoder_for_StopEvent) { _cached_decoder_for_StopEvent = $._decodeBitString; }
    return _cached_decoder_for_StopEvent(el);
}

let _cached_encoder_for_StopEvent: $.ASN1Encoder<StopEvent> | null = null;

/**
 * @summary Encodes a(n) StopEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopEvent, encoded as an ASN.1 Element.
 */
export
function _encode_StopEvent (value: StopEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopEvent) { _cached_encoder_for_StopEvent = $._encodeBitString; }
    return _cached_encoder_for_StopEvent(value, elGetter);
}


/* eslint-enable */
