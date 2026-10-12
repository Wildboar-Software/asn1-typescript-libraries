/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeDecimal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeDecimal  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeDecimal = OCTET_STRING; // OctetStringType

let _cached_decoder_for_WGS84LatitudeDecimal: $.ASN1Decoder<WGS84LatitudeDecimal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84LatitudeDecimal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84LatitudeDecimal (el: _Element): WGS84LatitudeDecimal {
    if (!_cached_decoder_for_WGS84LatitudeDecimal) { _cached_decoder_for_WGS84LatitudeDecimal = $._decodeOctetString; }
    return _cached_decoder_for_WGS84LatitudeDecimal(el);
}

let _cached_encoder_for_WGS84LatitudeDecimal: $.ASN1Encoder<WGS84LatitudeDecimal> | null = null;

/**
 * @summary Encodes a(n) WGS84LatitudeDecimal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84LatitudeDecimal, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84LatitudeDecimal (value: WGS84LatitudeDecimal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84LatitudeDecimal) { _cached_encoder_for_WGS84LatitudeDecimal = $._encodeOctetString; }
    return _cached_encoder_for_WGS84LatitudeDecimal(value, elGetter);
}


/* eslint-enable */
