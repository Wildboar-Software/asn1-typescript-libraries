/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PresenceStateEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceStateEvent  ::=  BIT STRING
 * {     fromTime                 ( 0),     -- optional parameters
 *     untilTime                 ( 1),     -- optional parameters
 *     place                     ( 2),     -- optional parameters
 *     mood                     ( 3),     -- optional parameters
 *     namedPresenceState             ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type PresenceStateEvent = BIT_STRING;

/**
 * @summary PresenceStateEvent_fromTime
 * @constant
 */
export
const PresenceStateEvent_fromTime: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary fromTime
 * @constant
 */
export
const fromTime: number = PresenceStateEvent_fromTime; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceStateEvent_untilTime
 * @constant
 */
export
const PresenceStateEvent_untilTime: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary untilTime
 * @constant
 */
export
const untilTime: number = PresenceStateEvent_untilTime; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceStateEvent_place
 * @constant
 */
export
const PresenceStateEvent_place: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary place
 * @constant
 */
export
const place: number = PresenceStateEvent_place; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceStateEvent_mood
 * @constant
 */
export
const PresenceStateEvent_mood: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mood
 * @constant
 */
export
const mood: number = PresenceStateEvent_mood; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceStateEvent_namedPresenceState
 * @constant
 */
export
const PresenceStateEvent_namedPresenceState: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary namedPresenceState
 * @constant
 */
export
const namedPresenceState: number = PresenceStateEvent_namedPresenceState; /* SHORT_NAMED_BIT */

/**
 * @summary PresenceStateEvent_privateData
 * @constant
 */
export
const PresenceStateEvent_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = PresenceStateEvent_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PresenceStateEvent: $.ASN1Decoder<PresenceStateEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceStateEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceStateEvent (el: _Element): PresenceStateEvent {
    if (!_cached_decoder_for_PresenceStateEvent) { _cached_decoder_for_PresenceStateEvent = $._decodeBitString; }
    return _cached_decoder_for_PresenceStateEvent(el);
}

let _cached_encoder_for_PresenceStateEvent: $.ASN1Encoder<PresenceStateEvent> | null = null;

/**
 * @summary Encodes a(n) PresenceStateEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceStateEvent, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceStateEvent (value: PresenceStateEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceStateEvent) { _cached_encoder_for_PresenceStateEvent = $._encodeBitString; }
    return _cached_encoder_for_PresenceStateEvent(value, elGetter);
}


/* eslint-enable */
