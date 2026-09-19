/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventParamValue, _decode_EventParamValue, _encode_EventParamValue } from "../MEDIA-GATEWAY-CONTROL/EventParamValue.ta.mjs";
// export { EventParamValue, _decode_EventParamValue, _encode_EventParamValue } from "../MEDIA-GATEWAY-CONTROL/EventParamValue.ta.mjs";


/**
 * @summary EventParamValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValues  ::=  SEQUENCE OF EventParamValue
 * ```
 */
export
type EventParamValues = EventParamValue[]; // SequenceOfType

let _cached_decoder_for_EventParamValues: $.ASN1Decoder<EventParamValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParamValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParamValues (el: _Element): EventParamValues {
    if (!_cached_decoder_for_EventParamValues) { _cached_decoder_for_EventParamValues = $._decodeSequenceOf<EventParamValue>(() => _decode_EventParamValue); }
    return _cached_decoder_for_EventParamValues(el);
}

let _cached_encoder_for_EventParamValues: $.ASN1Encoder<EventParamValues> | null = null;

/**
 * @summary Encodes a(n) EventParamValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParamValues, encoded as an ASN.1 Element.
 */
export
function _encode_EventParamValues (value: EventParamValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParamValues) { _cached_encoder_for_EventParamValues = $._encodeSequenceOf<EventParamValue>(() => _encode_EventParamValue, $.BER); }
    return _cached_encoder_for_EventParamValues(value, elGetter);
}


/* eslint-enable */
