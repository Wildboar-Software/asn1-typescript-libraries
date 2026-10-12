/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationAreaType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationAreaType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type LocationAreaType = BIT_STRING;

let _cached_decoder_for_LocationAreaType: $.ASN1Decoder<LocationAreaType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationAreaType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationAreaType (el: _Element): LocationAreaType {
    if (!_cached_decoder_for_LocationAreaType) { _cached_decoder_for_LocationAreaType = $._decodeBitString; }
    return _cached_decoder_for_LocationAreaType(el);
}

let _cached_encoder_for_LocationAreaType: $.ASN1Encoder<LocationAreaType> | null = null;

/**
 * @summary Encodes a(n) LocationAreaType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAreaType, encoded as an ASN.1 Element.
 */
export
function _encode_LocationAreaType (value: LocationAreaType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationAreaType) { _cached_encoder_for_LocationAreaType = $._encodeBitString; }
    return _cached_encoder_for_LocationAreaType(value, elGetter);
}


/* eslint-enable */
