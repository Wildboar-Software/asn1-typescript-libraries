/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CSREvent {
    cSREventMessage = 1,
}

/**
 * @summary CSREvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSREvent  ::=  ENUMERATED
 * {
 *  cSREventMessage (1),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSREvent = _enum_for_CSREvent | ENUMERATED;

/**
 * @summary CSREvent_cSREventMessage
 * @constant
 * @type {number}
 */
export
const CSREvent_cSREventMessage: CSREvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSREventMessage
 * @constant
 * @type {number}
 */
export
const cSREventMessage: CSREvent = CSREvent_cSREventMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CSREvent: $.ASN1Decoder<CSREvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSREvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSREvent (el: _Element): CSREvent {
    if (!_cached_decoder_for_CSREvent) { _cached_decoder_for_CSREvent = $._decodeEnumerated; }
    return _cached_decoder_for_CSREvent(el);
}

let _cached_encoder_for_CSREvent: $.ASN1Encoder<CSREvent> | null = null;

/**
 * @summary Encodes a(n) CSREvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSREvent, encoded as an ASN.1 Element.
 */
export
function _encode_CSREvent (value: CSREvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSREvent) { _cached_encoder_for_CSREvent = $._encodeEnumerated; }
    return _cached_encoder_for_CSREvent(value, elGetter);
}


/* eslint-enable */
