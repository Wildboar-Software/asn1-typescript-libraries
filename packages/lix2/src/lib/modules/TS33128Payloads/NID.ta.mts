/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NID  ::=  UTF8String (SIZE(11))
 * ```
 */
export
type NID = UTF8String; // UTF8String

let _cached_decoder_for_NID: $.ASN1Decoder<NID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NID (el: _Element): NID {
    if (!_cached_decoder_for_NID) { _cached_decoder_for_NID = $._decodeUTF8String; }
    return _cached_decoder_for_NID(el);
}

let _cached_encoder_for_NID: $.ASN1Encoder<NID> | null = null;

/**
 * @summary Encodes a(n) NID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NID, encoded as an ASN.1 Element.
 */
export
function _encode_NID (value: NID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NID) { _cached_encoder_for_NID = $._encodeUTF8String; }
    return _cached_encoder_for_NID(value, elGetter);
}


/* eslint-enable */
