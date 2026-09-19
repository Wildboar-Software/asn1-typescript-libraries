/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventParamValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventParamValue  ::=  OCTET STRING
 * ```
 */
export
type EventParamValue = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EventParamValue: $.ASN1Decoder<EventParamValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventParamValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventParamValue (el: _Element): EventParamValue {
    if (!_cached_decoder_for_EventParamValue) { _cached_decoder_for_EventParamValue = $._decodeOctetString; }
    return _cached_decoder_for_EventParamValue(el);
}

let _cached_encoder_for_EventParamValue: $.ASN1Encoder<EventParamValue> | null = null;

/**
 * @summary Encodes a(n) EventParamValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventParamValue, encoded as an ASN.1 Element.
 */
export
function _encode_EventParamValue (value: EventParamValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventParamValue) { _cached_encoder_for_EventParamValue = $._encodeOctetString; }
    return _cached_encoder_for_EventParamValue(value, elGetter);
}


/* eslint-enable */
