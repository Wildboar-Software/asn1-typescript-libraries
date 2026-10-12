/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeDecimal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeDecimal  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeDecimal = OCTET_STRING; // OctetStringType

let _cached_decoder_for_WGS84LongitudeDecimal: $.ASN1Decoder<WGS84LongitudeDecimal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WGS84LongitudeDecimal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WGS84LongitudeDecimal (el: _Element): WGS84LongitudeDecimal {
    if (!_cached_decoder_for_WGS84LongitudeDecimal) { _cached_decoder_for_WGS84LongitudeDecimal = $._decodeOctetString; }
    return _cached_decoder_for_WGS84LongitudeDecimal(el);
}

let _cached_encoder_for_WGS84LongitudeDecimal: $.ASN1Encoder<WGS84LongitudeDecimal> | null = null;

/**
 * @summary Encodes a(n) WGS84LongitudeDecimal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WGS84LongitudeDecimal, encoded as an ASN.1 Element.
 */
export
function _encode_WGS84LongitudeDecimal (value: WGS84LongitudeDecimal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WGS84LongitudeDecimal) { _cached_encoder_for_WGS84LongitudeDecimal = $._encodeOctetString; }
    return _cached_encoder_for_WGS84LongitudeDecimal(value, elGetter);
}


/* eslint-enable */
