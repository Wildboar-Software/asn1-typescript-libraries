/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINClientID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientID  ::=  UTF8String
 * ```
 */
export
type PINClientID = UTF8String; // UTF8String

let _cached_decoder_for_PINClientID: $.ASN1Decoder<PINClientID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINClientID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINClientID (el: _Element): PINClientID {
    if (!_cached_decoder_for_PINClientID) { _cached_decoder_for_PINClientID = $._decodeUTF8String; }
    return _cached_decoder_for_PINClientID(el);
}

let _cached_encoder_for_PINClientID: $.ASN1Encoder<PINClientID> | null = null;

/**
 * @summary Encodes a(n) PINClientID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINClientID, encoded as an ASN.1 Element.
 */
export
function _encode_PINClientID (value: PINClientID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINClientID) { _cached_encoder_for_PINClientID = $._encodeUTF8String; }
    return _cached_encoder_for_PINClientID(value, elGetter);
}


/* eslint-enable */
