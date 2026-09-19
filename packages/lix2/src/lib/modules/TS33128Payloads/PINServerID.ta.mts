/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINServerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINServerID  ::=  UTF8String
 * ```
 */
export
type PINServerID = UTF8String; // UTF8String

let _cached_decoder_for_PINServerID: $.ASN1Decoder<PINServerID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINServerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINServerID (el: _Element): PINServerID {
    if (!_cached_decoder_for_PINServerID) { _cached_decoder_for_PINServerID = $._decodeUTF8String; }
    return _cached_decoder_for_PINServerID(el);
}

let _cached_encoder_for_PINServerID: $.ASN1Encoder<PINServerID> | null = null;

/**
 * @summary Encodes a(n) PINServerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINServerID, encoded as an ASN.1 Element.
 */
export
function _encode_PINServerID (value: PINServerID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINServerID) { _cached_encoder_for_PINServerID = $._encodeUTF8String; }
    return _cached_encoder_for_PINServerID(value, elGetter);
}


/* eslint-enable */
