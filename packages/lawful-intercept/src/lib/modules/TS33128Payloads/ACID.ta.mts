/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACID  ::=  UTF8String
 * ```
 */
export
type ACID = UTF8String; // UTF8String

let _cached_decoder_for_ACID: $.ASN1Decoder<ACID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACID (el: _Element): ACID {
    if (!_cached_decoder_for_ACID) { _cached_decoder_for_ACID = $._decodeUTF8String; }
    return _cached_decoder_for_ACID(el);
}

let _cached_encoder_for_ACID: $.ASN1Encoder<ACID> | null = null;

/**
 * @summary Encodes a(n) ACID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACID, encoded as an ASN.1 Element.
 */
export
function _encode_ACID (value: ACID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACID) { _cached_encoder_for_ACID = $._encodeUTF8String; }
    return _cached_encoder_for_ACID(value, elGetter);
}


/* eslint-enable */
