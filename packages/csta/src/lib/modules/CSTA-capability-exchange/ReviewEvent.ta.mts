/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ReviewEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReviewEvent  ::=  BIT STRING
 * {     message                    ( 5),     -- optional parameters
 *     resource                ( 6),     -- optional parameters
 *     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type ReviewEvent = BIT_STRING;

/**
 * @summary ReviewEvent_message
 * @constant
 */
export
const ReviewEvent_message: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = ReviewEvent_message; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_resource
 * @constant
 */
export
const ReviewEvent_resource: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = ReviewEvent_resource; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_length
 * @constant
 */
export
const ReviewEvent_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = ReviewEvent_length; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_currentPosition
 * @constant
 */
export
const ReviewEvent_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = ReviewEvent_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_cause
 * @constant
 */
export
const ReviewEvent_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = ReviewEvent_cause; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_servicesPermitted
 * @constant
 */
export
const ReviewEvent_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = ReviewEvent_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary ReviewEvent_privateData
 * @constant
 */
export
const ReviewEvent_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ReviewEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ReviewEvent: $.ASN1Decoder<ReviewEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReviewEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReviewEvent (el: _Element): ReviewEvent {
    if (!_cached_decoder_for_ReviewEvent) { _cached_decoder_for_ReviewEvent = $._decodeBitString; }
    return _cached_decoder_for_ReviewEvent(el);
}

let _cached_encoder_for_ReviewEvent: $.ASN1Encoder<ReviewEvent> | null = null;

/**
 * @summary Encodes a(n) ReviewEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReviewEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ReviewEvent (value: ReviewEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReviewEvent) { _cached_encoder_for_ReviewEvent = $._encodeBitString; }
    return _cached_encoder_for_ReviewEvent(value, elGetter);
}


/* eslint-enable */
