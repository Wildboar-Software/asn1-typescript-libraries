/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFID  ::=  UTF8String
 * ```
 */
export
type AFID = UTF8String; // UTF8String

let _cached_decoder_for_AFID: $.ASN1Decoder<AFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFID (el: _Element): AFID {
    if (!_cached_decoder_for_AFID) { _cached_decoder_for_AFID = $._decodeUTF8String; }
    return _cached_decoder_for_AFID(el);
}

let _cached_encoder_for_AFID: $.ASN1Encoder<AFID> | null = null;

/**
 * @summary Encodes a(n) AFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFID, encoded as an ASN.1 Element.
 */
export
function _encode_AFID (value: AFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFID) { _cached_encoder_for_AFID = $._encodeUTF8String; }
    return _cached_encoder_for_AFID(value, elGetter);
}


/* eslint-enable */
