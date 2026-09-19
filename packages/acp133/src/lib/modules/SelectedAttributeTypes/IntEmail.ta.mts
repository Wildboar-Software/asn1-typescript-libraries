/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IntEmail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntEmail  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of an (internationalized) email address. -- })
 * ```
 */
export
type IntEmail = UTF8String; // UTF8String

let _cached_decoder_for_IntEmail: $.ASN1Decoder<IntEmail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntEmail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntEmail (el: _Element): IntEmail {
    if (!_cached_decoder_for_IntEmail) { _cached_decoder_for_IntEmail = $._decodeUTF8String; }
    return _cached_decoder_for_IntEmail(el);
}

let _cached_encoder_for_IntEmail: $.ASN1Encoder<IntEmail> | null = null;

/**
 * @summary Encodes a(n) IntEmail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntEmail, encoded as an ASN.1 Element.
 */
export
function _encode_IntEmail (value: IntEmail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntEmail) { _cached_encoder_for_IntEmail = $._encodeUTF8String; }
    return _cached_encoder_for_IntEmail(value, elGetter);
}


/* eslint-enable */
