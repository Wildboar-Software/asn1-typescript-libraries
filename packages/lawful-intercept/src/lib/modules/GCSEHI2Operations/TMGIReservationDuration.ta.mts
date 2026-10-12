/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TMGIReservationDuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TMGIReservationDuration  ::=  OCTET STRING
 * ```
 */
export
type TMGIReservationDuration = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TMGIReservationDuration: $.ASN1Decoder<TMGIReservationDuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TMGIReservationDuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TMGIReservationDuration (el: _Element): TMGIReservationDuration {
    if (!_cached_decoder_for_TMGIReservationDuration) { _cached_decoder_for_TMGIReservationDuration = $._decodeOctetString; }
    return _cached_decoder_for_TMGIReservationDuration(el);
}

let _cached_encoder_for_TMGIReservationDuration: $.ASN1Encoder<TMGIReservationDuration> | null = null;

/**
 * @summary Encodes a(n) TMGIReservationDuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TMGIReservationDuration, encoded as an ASN.1 Element.
 */
export
function _encode_TMGIReservationDuration (value: TMGIReservationDuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TMGIReservationDuration) { _cached_encoder_for_TMGIReservationDuration = $._encodeOctetString; }
    return _cached_encoder_for_TMGIReservationDuration(value, elGetter);
}


/* eslint-enable */
