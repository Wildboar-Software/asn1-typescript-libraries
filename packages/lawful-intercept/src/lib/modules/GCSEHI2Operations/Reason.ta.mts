/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reason  ::=  UTF8String
 * ```
 */
export
type Reason = UTF8String; // UTF8String

let _cached_decoder_for_Reason: $.ASN1Decoder<Reason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reason (el: _Element): Reason {
    if (!_cached_decoder_for_Reason) { _cached_decoder_for_Reason = $._decodeUTF8String; }
    return _cached_decoder_for_Reason(el);
}

let _cached_encoder_for_Reason: $.ASN1Encoder<Reason> | null = null;

/**
 * @summary Encodes a(n) Reason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reason, encoded as an ASN.1 Element.
 */
export
function _encode_Reason (value: Reason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reason) { _cached_encoder_for_Reason = $._encodeUTF8String; }
    return _cached_encoder_for_Reason(value, elGetter);
}


/* eslint-enable */
