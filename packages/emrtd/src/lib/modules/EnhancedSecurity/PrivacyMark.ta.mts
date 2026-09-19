/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivacyMark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export
type PrivacyMark = PrintableString; // PrintableString

let _cached_decoder_for_PrivacyMark: $.ASN1Decoder<PrivacyMark> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivacyMark
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivacyMark (el: _Element): PrivacyMark {
    if (!_cached_decoder_for_PrivacyMark) { _cached_decoder_for_PrivacyMark = $._decodePrintableString; }
    return _cached_decoder_for_PrivacyMark(el);
}

let _cached_encoder_for_PrivacyMark: $.ASN1Encoder<PrivacyMark> | null = null;

/**
 * @summary Encodes a(n) PrivacyMark into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivacyMark, encoded as an ASN.1 Element.
 */
export
function _encode_PrivacyMark (value: PrivacyMark, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivacyMark) { _cached_encoder_for_PrivacyMark = $._encodePrintableString; }
    return _cached_encoder_for_PrivacyMark(value, elGetter);
}


/* eslint-enable */
