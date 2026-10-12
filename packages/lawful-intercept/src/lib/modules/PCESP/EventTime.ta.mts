/* eslint-disable */
import {
    ASN1Element as _Element,
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventTime  ::=  GeneralizedTime
 * ```
 */
export
type EventTime = GeneralizedTime; // GeneralizedTime

let _cached_decoder_for_EventTime: $.ASN1Decoder<EventTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventTime (el: _Element): EventTime {
    if (!_cached_decoder_for_EventTime) { _cached_decoder_for_EventTime = $._decodeGeneralizedTime; }
    return _cached_decoder_for_EventTime(el);
}

let _cached_encoder_for_EventTime: $.ASN1Encoder<EventTime> | null = null;

/**
 * @summary Encodes a(n) EventTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventTime, encoded as an ASN.1 Element.
 */
export
function _encode_EventTime (value: EventTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventTime) { _cached_encoder_for_EventTime = $._encodeGeneralizedTime; }
    return _cached_encoder_for_EventTime(value, elGetter);
}


/* eslint-enable */
