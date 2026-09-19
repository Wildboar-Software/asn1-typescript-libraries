/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_EventBufferControl {
    off = 0,
    lockStep = 1,
}

/**
 * @summary EventBufferControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventBufferControl  ::=  ENUMERATED
 *     {
 *         off(0),
 *         lockStep(1),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type EventBufferControl = _enum_for_EventBufferControl | ENUMERATED;

/**
 * @summary EventBufferControl_off
 * @constant
 * @type {number}
 */
export
const EventBufferControl_off: EventBufferControl = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off
 * @constant
 * @type {number}
 */
export
const off: EventBufferControl = EventBufferControl_off; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventBufferControl_lockStep
 * @constant
 * @type {number}
 */
export
const EventBufferControl_lockStep: EventBufferControl = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockStep
 * @constant
 * @type {number}
 */
export
const lockStep: EventBufferControl = EventBufferControl_lockStep; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EventBufferControl: $.ASN1Decoder<EventBufferControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventBufferControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventBufferControl (el: _Element): EventBufferControl {
    if (!_cached_decoder_for_EventBufferControl) { _cached_decoder_for_EventBufferControl = $._decodeEnumerated; }
    return _cached_decoder_for_EventBufferControl(el);
}

let _cached_encoder_for_EventBufferControl: $.ASN1Encoder<EventBufferControl> | null = null;

/**
 * @summary Encodes a(n) EventBufferControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventBufferControl, encoded as an ASN.1 Element.
 */
export
function _encode_EventBufferControl (value: EventBufferControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventBufferControl) { _cached_encoder_for_EventBufferControl = $._encodeEnumerated; }
    return _cached_encoder_for_EventBufferControl(value, elGetter);
}


/* eslint-enable */
