/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TNGFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNGFID  ::=  UTF8String
 * ```
 */
export
type TNGFID = UTF8String; // UTF8String

let _cached_decoder_for_TNGFID: $.ASN1Decoder<TNGFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TNGFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TNGFID (el: _Element): TNGFID {
    if (!_cached_decoder_for_TNGFID) { _cached_decoder_for_TNGFID = $._decodeUTF8String; }
    return _cached_decoder_for_TNGFID(el);
}

let _cached_encoder_for_TNGFID: $.ASN1Encoder<TNGFID> | null = null;

/**
 * @summary Encodes a(n) TNGFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TNGFID, encoded as an ASN.1 Element.
 */
export
function _encode_TNGFID (value: TNGFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TNGFID) { _cached_encoder_for_TNGFID = $._encodeUTF8String; }
    return _cached_encoder_for_TNGFID(value, elGetter);
}


/* eslint-enable */
