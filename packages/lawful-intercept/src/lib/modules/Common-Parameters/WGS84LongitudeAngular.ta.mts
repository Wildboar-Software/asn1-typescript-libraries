/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeAngular
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeAngular  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeAngular = OCTET_STRING; // OctetStringType

let _cached_decoder_for_WGS84LongitudeAngular: $.ASN1Decoder<WGS84LongitudeAngular> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84LongitudeAngular
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84LongitudeAngular (el: _Element): WGS84LongitudeAngular {
    if (!_cached_decoder_for_WGS84LongitudeAngular) { _cached_decoder_for_WGS84LongitudeAngular = $._decodeOctetString; }
    return _cached_decoder_for_WGS84LongitudeAngular(el);
}

let _cached_encoder_for_WGS84LongitudeAngular: $.ASN1Encoder<WGS84LongitudeAngular> | null = null;

/**
 * @summary Encodes a(n) WGS84LongitudeAngular into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84LongitudeAngular, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84LongitudeAngular (value: WGS84LongitudeAngular, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84LongitudeAngular) { _cached_encoder_for_WGS84LongitudeAngular = $._encodeOctetString; }
    return _cached_encoder_for_WGS84LongitudeAngular(value, elGetter);
}


/* eslint-enable */
