/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Event_event, _encode_Event_event, Event_event } from "../IN-CS3-SCF-SCF-datatypes/Event-event.ta.mjs";
// export { Event_event, _enum_for_Event_event, Event_event_now /* IMPORTED_LONG_ENUMERATION_ITEM */, now /* IMPORTED_SHORT_ENUMERATION_ITEM */, Event_event_answer /* IMPORTED_LONG_ENUMERATION_ITEM */, answer /* IMPORTED_SHORT_ENUMERATION_ITEM */, Event_event_user_interaction /* IMPORTED_LONG_ENUMERATION_ITEM */, user_interaction /* IMPORTED_SHORT_ENUMERATION_ITEM */, Event_event_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Event_event, _encode_Event_event } from "../IN-CS3-SCF-SCF-datatypes/Event-event.ta.mjs";


/**
 * @summary Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event  ::=  CHOICE {
 *   duration  [1]  INTEGER(0..maxTimeInterval),
 *   event
 *     [2]  ENUMERATED {now(0), answer(1), user-interaction(2), failure(3)}
 * }
 * ```
 */
export
type Event =
    { duration: INTEGER } /* CHOICE_ALT_ROOT */
    | { event: Event_event } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event: $.ASN1Decoder<Event> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event (el: _Element): Event {
    if (!_cached_decoder_for_Event) { _cached_decoder_for_Event = $._decode_inextensible_choice<Event>({
    "CONTEXT 1": [ "duration", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "event", $._decode_implicit<Event_event>(() => _decode_Event_event) ]
}); }
    return _cached_decoder_for_Event(el);
}

let _cached_encoder_for_Event: $.ASN1Encoder<Event> | null = null;

/**
 * @summary Encodes a(n) Event into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event, encoded as an ASN.1 Element.
 */
export
function _encode_Event (value: Event, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event) { _cached_encoder_for_Event = $._encode_choice<Event>({
    "duration": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "event": $._encode_implicit(_TagClass.context, 2, () => _encode_Event_event, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event(value, elGetter);
}


/* eslint-enable */
