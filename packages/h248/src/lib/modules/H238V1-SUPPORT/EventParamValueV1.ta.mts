/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValueV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValueV1  ::=  OCTET STRING
 * ```
 */
export
type EventParamValueV1 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EventParamValueV1: $.ASN1Decoder<EventParamValueV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParamValueV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParamValueV1 (el: _Element): EventParamValueV1 {
    if (!_cached_decoder_for_EventParamValueV1) { _cached_decoder_for_EventParamValueV1 = $._decodeOctetString; }
    return _cached_decoder_for_EventParamValueV1(el);
}

let _cached_encoder_for_EventParamValueV1: $.ASN1Encoder<EventParamValueV1> | null = null;

/**
 * @summary Encodes a(n) EventParamValueV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParamValueV1, encoded as an ASN.1 Element.
 */
export
function _encode_EventParamValueV1 (value: EventParamValueV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParamValueV1) { _cached_encoder_for_EventParamValueV1 = $._encodeOctetString; }
    return _cached_encoder_for_EventParamValueV1(value, elGetter);
}


/* eslint-enable */
