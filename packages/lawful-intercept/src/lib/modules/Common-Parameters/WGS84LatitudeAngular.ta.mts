/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeAngular
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeAngular  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeAngular = OCTET_STRING; // OctetStringType

let _cached_decoder_for_WGS84LatitudeAngular: $.ASN1Decoder<WGS84LatitudeAngular> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84LatitudeAngular
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84LatitudeAngular (el: _Element): WGS84LatitudeAngular {
    if (!_cached_decoder_for_WGS84LatitudeAngular) { _cached_decoder_for_WGS84LatitudeAngular = $._decodeOctetString; }
    return _cached_decoder_for_WGS84LatitudeAngular(el);
}

let _cached_encoder_for_WGS84LatitudeAngular: $.ASN1Encoder<WGS84LatitudeAngular> | null = null;

/**
 * @summary Encodes a(n) WGS84LatitudeAngular into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84LatitudeAngular, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84LatitudeAngular (value: WGS84LatitudeAngular, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84LatitudeAngular) { _cached_encoder_for_WGS84LatitudeAngular = $._encodeOctetString; }
    return _cached_encoder_for_WGS84LatitudeAngular(value, elGetter);
}


/* eslint-enable */
