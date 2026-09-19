/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NFID  ::=  UTF8String
 * ```
 */
export
type NFID = UTF8String; // UTF8String

let _cached_decoder_for_NFID: $.ASN1Decoder<NFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NFID (el: _Element): NFID {
    if (!_cached_decoder_for_NFID) { _cached_decoder_for_NFID = $._decodeUTF8String; }
    return _cached_decoder_for_NFID(el);
}

let _cached_encoder_for_NFID: $.ASN1Encoder<NFID> | null = null;

/**
 * @summary Encodes a(n) NFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NFID, encoded as an ASN.1 Element.
 */
export
function _encode_NFID (value: NFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NFID) { _cached_encoder_for_NFID = $._encodeUTF8String; }
    return _cached_encoder_for_NFID(value, elGetter);
}


/* eslint-enable */
