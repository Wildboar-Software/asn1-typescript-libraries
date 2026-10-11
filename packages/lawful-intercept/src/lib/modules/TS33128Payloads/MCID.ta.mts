/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCID  ::=  UTF8String
 * ```
 */
export
type MCID = UTF8String; // UTF8String

let _cached_decoder_for_MCID: $.ASN1Decoder<MCID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCID (el: _Element): MCID {
    if (!_cached_decoder_for_MCID) { _cached_decoder_for_MCID = $._decodeUTF8String; }
    return _cached_decoder_for_MCID(el);
}

let _cached_encoder_for_MCID: $.ASN1Encoder<MCID> | null = null;

/**
 * @summary Encodes a(n) MCID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCID, encoded as an ASN.1 Element.
 */
export
function _encode_MCID (value: MCID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCID) { _cached_encoder_for_MCID = $._encodeUTF8String; }
    return _cached_encoder_for_MCID(value, elGetter);
}


/* eslint-enable */
