/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocation = INTEGER;

let _cached_decoder_for_AgeOfLocation: $.ASN1Decoder<AgeOfLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgeOfLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgeOfLocation (el: _Element): AgeOfLocation {
    if (!_cached_decoder_for_AgeOfLocation) { _cached_decoder_for_AgeOfLocation = $._decodeInteger; }
    return _cached_decoder_for_AgeOfLocation(el);
}

let _cached_encoder_for_AgeOfLocation: $.ASN1Encoder<AgeOfLocation> | null = null;

/**
 * @summary Encodes a(n) AgeOfLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgeOfLocation, encoded as an ASN.1 Element.
 */
export
function _encode_AgeOfLocation (value: AgeOfLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgeOfLocation) { _cached_encoder_for_AgeOfLocation = $._encodeInteger; }
    return _cached_encoder_for_AgeOfLocation(value, elGetter);
}


/* eslint-enable */
