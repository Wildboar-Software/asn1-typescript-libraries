/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EventName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventName  ::=  OCTET STRING
 * ```
 */
export
type EventName = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EventName: $.ASN1Decoder<EventName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventName (el: _Element): EventName {
    if (!_cached_decoder_for_EventName) { _cached_decoder_for_EventName = $._decodeOctetString; }
    return _cached_decoder_for_EventName(el);
}

let _cached_encoder_for_EventName: $.ASN1Encoder<EventName> | null = null;

/**
 * @summary Encodes a(n) EventName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventName, encoded as an ASN.1 Element.
 */
export
function _encode_EventName (value: EventName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventName) { _cached_encoder_for_EventName = $._encodeOctetString; }
    return _cached_encoder_for_EventName(value, elGetter);
}


/* eslint-enable */
