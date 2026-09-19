/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCSASID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCSASID  ::=  UTF8String
 * ```
 */
export
type SCSASID = UTF8String; // UTF8String

let _cached_decoder_for_SCSASID: $.ASN1Decoder<SCSASID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCSASID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCSASID (el: _Element): SCSASID {
    if (!_cached_decoder_for_SCSASID) { _cached_decoder_for_SCSASID = $._decodeUTF8String; }
    return _cached_decoder_for_SCSASID(el);
}

let _cached_encoder_for_SCSASID: $.ASN1Encoder<SCSASID> | null = null;

/**
 * @summary Encodes a(n) SCSASID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCSASID, encoded as an ASN.1 Element.
 */
export
function _encode_SCSASID (value: SCSASID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCSASID) { _cached_encoder_for_SCSASID = $._encodeUTF8String; }
    return _cached_encoder_for_SCSASID(value, elGetter);
}


/* eslint-enable */
