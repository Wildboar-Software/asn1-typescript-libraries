/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EESID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESID  ::=  UTF8String
 * ```
 */
export
type EESID = UTF8String; // UTF8String

let _cached_decoder_for_EESID: $.ASN1Decoder<EESID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESID (el: _Element): EESID {
    if (!_cached_decoder_for_EESID) { _cached_decoder_for_EESID = $._decodeUTF8String; }
    return _cached_decoder_for_EESID(el);
}

let _cached_encoder_for_EESID: $.ASN1Encoder<EESID> | null = null;

/**
 * @summary Encodes a(n) EESID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESID, encoded as an ASN.1 Element.
 */
export
function _encode_EESID (value: EESID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESID) { _cached_encoder_for_EESID = $._encodeUTF8String; }
    return _cached_encoder_for_EESID(value, elGetter);
}


/* eslint-enable */
