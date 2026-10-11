/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFID  ::=  UTF8String
 * ```
 */
export
type SMFID = UTF8String; // UTF8String

let _cached_decoder_for_SMFID: $.ASN1Decoder<SMFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFID (el: _Element): SMFID {
    if (!_cached_decoder_for_SMFID) { _cached_decoder_for_SMFID = $._decodeUTF8String; }
    return _cached_decoder_for_SMFID(el);
}

let _cached_encoder_for_SMFID: $.ASN1Encoder<SMFID> | null = null;

/**
 * @summary Encodes a(n) SMFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFID, encoded as an ASN.1 Element.
 */
export
function _encode_SMFID (value: SMFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFID) { _cached_encoder_for_SMFID = $._encodeUTF8String; }
    return _cached_encoder_for_SMFID(value, elGetter);
}


/* eslint-enable */
