/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FloatingPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FloatingPoint  ::=  OCTET STRING
 * ```
 */
export
type FloatingPoint = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FloatingPoint: $.ASN1Decoder<FloatingPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FloatingPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FloatingPoint (el: _Element): FloatingPoint {
    if (!_cached_decoder_for_FloatingPoint) { _cached_decoder_for_FloatingPoint = $._decodeOctetString; }
    return _cached_decoder_for_FloatingPoint(el);
}

let _cached_encoder_for_FloatingPoint: $.ASN1Encoder<FloatingPoint> | null = null;

/**
 * @summary Encodes a(n) FloatingPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FloatingPoint, encoded as an ASN.1 Element.
 */
export
function _encode_FloatingPoint (value: FloatingPoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FloatingPoint) { _cached_encoder_for_FloatingPoint = $._encodeOctetString; }
    return _cached_encoder_for_FloatingPoint(value, elGetter);
}


/* eslint-enable */
