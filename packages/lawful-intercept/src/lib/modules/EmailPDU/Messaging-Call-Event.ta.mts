/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Call_Event {
    callout = 1,
}

/**
 * @summary Messaging_Call_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Call-Event  ::=  ENUMERATED
 * {
 *     callout(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Call_Event = _enum_for_Messaging_Call_Event | ENUMERATED;

/**
 * @summary Messaging_Call_Event_callout
 * @constant
 * @type {number}
 */
export
const Messaging_Call_Event_callout: Messaging_Call_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callout
 * @constant
 * @type {number}
 */
export
const callout: Messaging_Call_Event = Messaging_Call_Event_callout; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Call_Event: $.ASN1Decoder<Messaging_Call_Event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Call_Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Call_Event (el: _Element): Messaging_Call_Event {
    if (!_cached_decoder_for_Messaging_Call_Event) { _cached_decoder_for_Messaging_Call_Event = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Call_Event(el);
}

let _cached_encoder_for_Messaging_Call_Event: $.ASN1Encoder<Messaging_Call_Event> | null = null;

/**
 * @summary Encodes a(n) Messaging_Call_Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Call_Event, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Call_Event (value: Messaging_Call_Event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Call_Event) { _cached_encoder_for_Messaging_Call_Event = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Call_Event(value, elGetter);
}


/* eslint-enable */
