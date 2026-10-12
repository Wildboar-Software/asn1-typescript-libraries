/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PINID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINID  ::=  UTF8String
 * ```
 */
export
type PINID = UTF8String; // UTF8String

let _cached_decoder_for_PINID: $.ASN1Decoder<PINID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINID (el: _Element): PINID {
    if (!_cached_decoder_for_PINID) { _cached_decoder_for_PINID = $._decodeUTF8String; }
    return _cached_decoder_for_PINID(el);
}

let _cached_encoder_for_PINID: $.ASN1Encoder<PINID> | null = null;

/**
 * @summary Encodes a(n) PINID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINID, encoded as an ASN.1 Element.
 */
export
function _encode_PINID (value: PINID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINID) { _cached_encoder_for_PINID = $._encodeUTF8String; }
    return _cached_encoder_for_PINID(value, elGetter);
}


/* eslint-enable */
