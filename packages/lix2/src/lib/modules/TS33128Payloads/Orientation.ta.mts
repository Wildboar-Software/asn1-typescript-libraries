/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Orientation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Orientation  ::=  INTEGER (0..180)
 * ```
 */
export
type Orientation = INTEGER;

let _cached_decoder_for_Orientation: $.ASN1Decoder<Orientation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Orientation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Orientation (el: _Element): Orientation {
    if (!_cached_decoder_for_Orientation) { _cached_decoder_for_Orientation = $._decodeInteger; }
    return _cached_decoder_for_Orientation(el);
}

let _cached_encoder_for_Orientation: $.ASN1Encoder<Orientation> | null = null;

/**
 * @summary Encodes a(n) Orientation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Orientation, encoded as an ASN.1 Element.
 */
export
function _encode_Orientation (value: Orientation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Orientation) { _cached_encoder_for_Orientation = $._encodeInteger; }
    return _cached_encoder_for_Orientation(value, elGetter);
}


/* eslint-enable */
