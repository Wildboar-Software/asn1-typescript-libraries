/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventSpec, _decode_EventSpec, _encode_EventSpec } from "../MEDIA-GATEWAY-CONTROL/EventSpec.ta.mjs";
// export { EventSpec, _decode_EventSpec, _encode_EventSpec } from "../MEDIA-GATEWAY-CONTROL/EventSpec.ta.mjs";


/**
 * @summary EventBufferDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventBufferDescriptor  ::=  SEQUENCE OF EventSpec
 * ```
 */
export
type EventBufferDescriptor = EventSpec[]; // SequenceOfType

let _cached_decoder_for_EventBufferDescriptor: $.ASN1Decoder<EventBufferDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventBufferDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventBufferDescriptor (el: _Element): EventBufferDescriptor {
    if (!_cached_decoder_for_EventBufferDescriptor) { _cached_decoder_for_EventBufferDescriptor = $._decodeSequenceOf<EventSpec>(() => _decode_EventSpec); }
    return _cached_decoder_for_EventBufferDescriptor(el);
}

let _cached_encoder_for_EventBufferDescriptor: $.ASN1Encoder<EventBufferDescriptor> | null = null;

/**
 * @summary Encodes a(n) EventBufferDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventBufferDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_EventBufferDescriptor (value: EventBufferDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventBufferDescriptor) { _cached_encoder_for_EventBufferDescriptor = $._encodeSequenceOf<EventSpec>(() => _encode_EventSpec, $.BER); }
    return _cached_encoder_for_EventBufferDescriptor(value, elGetter);
}


/* eslint-enable */
