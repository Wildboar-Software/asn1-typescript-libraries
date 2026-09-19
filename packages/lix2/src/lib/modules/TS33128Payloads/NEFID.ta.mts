/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFID  ::=  UTF8String
 * ```
 */
export
type NEFID = UTF8String; // UTF8String

let _cached_decoder_for_NEFID: $.ASN1Decoder<NEFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFID (el: _Element): NEFID {
    if (!_cached_decoder_for_NEFID) { _cached_decoder_for_NEFID = $._decodeUTF8String; }
    return _cached_decoder_for_NEFID(el);
}

let _cached_encoder_for_NEFID: $.ASN1Encoder<NEFID> | null = null;

/**
 * @summary Encodes a(n) NEFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFID, encoded as an ASN.1 Element.
 */
export
function _encode_NEFID (value: NEFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFID) { _cached_encoder_for_NEFID = $._encodeUTF8String; }
    return _cached_encoder_for_NEFID(value, elGetter);
}


/* eslint-enable */
