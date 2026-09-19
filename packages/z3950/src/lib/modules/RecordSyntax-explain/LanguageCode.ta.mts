/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LanguageCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LanguageCode  ::= InternationalString
 * ```
 */
export
type LanguageCode = InternationalString; // DefinedType

let _cached_decoder_for_LanguageCode: $.ASN1Decoder<LanguageCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LanguageCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LanguageCode (el: _Element): LanguageCode {
    if (!_cached_decoder_for_LanguageCode) { _cached_decoder_for_LanguageCode = _decode_InternationalString; }
    return _cached_decoder_for_LanguageCode(el);
}

let _cached_encoder_for_LanguageCode: $.ASN1Encoder<LanguageCode> | null = null;

/**
 * @summary Encodes a(n) LanguageCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageCode, encoded as an ASN.1 Element.
 */
export
function _encode_LanguageCode (value: LanguageCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LanguageCode) { _cached_encoder_for_LanguageCode = _encode_InternationalString; }
    return _cached_encoder_for_LanguageCode(value, elGetter);
}


/* eslint-enable */
