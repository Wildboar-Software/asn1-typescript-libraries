/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpeedUncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeedUncertainty  ::=  UTF8String
 * ```
 */
export
type SpeedUncertainty = UTF8String; // UTF8String

let _cached_decoder_for_SpeedUncertainty: $.ASN1Decoder<SpeedUncertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeedUncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeedUncertainty (el: _Element): SpeedUncertainty {
    if (!_cached_decoder_for_SpeedUncertainty) { _cached_decoder_for_SpeedUncertainty = $._decodeUTF8String; }
    return _cached_decoder_for_SpeedUncertainty(el);
}

let _cached_encoder_for_SpeedUncertainty: $.ASN1Encoder<SpeedUncertainty> | null = null;

/**
 * @summary Encodes a(n) SpeedUncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeedUncertainty, encoded as an ASN.1 Element.
 */
export
function _encode_SpeedUncertainty (value: SpeedUncertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeedUncertainty) { _cached_encoder_for_SpeedUncertainty = $._encodeUTF8String; }
    return _cached_encoder_for_SpeedUncertainty(value, elGetter);
}


/* eslint-enable */
