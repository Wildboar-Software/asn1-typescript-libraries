/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RFBand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RFBand  ::=  UTF8String
 * ```
 */
export
type RFBand = UTF8String; // UTF8String

let _cached_decoder_for_RFBand: $.ASN1Decoder<RFBand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RFBand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RFBand (el: _Element): RFBand {
    if (!_cached_decoder_for_RFBand) { _cached_decoder_for_RFBand = $._decodeUTF8String; }
    return _cached_decoder_for_RFBand(el);
}

let _cached_encoder_for_RFBand: $.ASN1Encoder<RFBand> | null = null;

/**
 * @summary Encodes a(n) RFBand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RFBand, encoded as an ASN.1 Element.
 */
export
function _encode_RFBand (value: RFBand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RFBand) { _cached_encoder_for_RFBand = $._encodeUTF8String; }
    return _cached_encoder_for_RFBand(value, elGetter);
}


/* eslint-enable */
