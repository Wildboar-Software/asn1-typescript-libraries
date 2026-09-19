/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WAGFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WAGFID  ::=  UTF8String
 * ```
 */
export
type WAGFID = UTF8String; // UTF8String

let _cached_decoder_for_WAGFID: $.ASN1Decoder<WAGFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WAGFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WAGFID (el: _Element): WAGFID {
    if (!_cached_decoder_for_WAGFID) { _cached_decoder_for_WAGFID = $._decodeUTF8String; }
    return _cached_decoder_for_WAGFID(el);
}

let _cached_encoder_for_WAGFID: $.ASN1Encoder<WAGFID> | null = null;

/**
 * @summary Encodes a(n) WAGFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WAGFID, encoded as an ASN.1 Element.
 */
export
function _encode_WAGFID (value: WAGFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WAGFID) { _cached_encoder_for_WAGFID = $._encodeUTF8String; }
    return _cached_encoder_for_WAGFID(value, elGetter);
}


/* eslint-enable */
