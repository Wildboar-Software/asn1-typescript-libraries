/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LanguagePreferences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LanguagePreferences  ::=  IA5String
 * ```
 */
export
type LanguagePreferences = IA5String; // IA5String

let _cached_decoder_for_LanguagePreferences: $.ASN1Decoder<LanguagePreferences> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LanguagePreferences
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LanguagePreferences (el: _Element): LanguagePreferences {
    if (!_cached_decoder_for_LanguagePreferences) { _cached_decoder_for_LanguagePreferences = $._decodeIA5String; }
    return _cached_decoder_for_LanguagePreferences(el);
}

let _cached_encoder_for_LanguagePreferences: $.ASN1Encoder<LanguagePreferences> | null = null;

/**
 * @summary Encodes a(n) LanguagePreferences into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguagePreferences, encoded as an ASN.1 Element.
 */
export
function _encode_LanguagePreferences (value: LanguagePreferences, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LanguagePreferences) { _cached_encoder_for_LanguagePreferences = $._encodeIA5String; }
    return _cached_encoder_for_LanguagePreferences(value, elGetter);
}


/* eslint-enable */
