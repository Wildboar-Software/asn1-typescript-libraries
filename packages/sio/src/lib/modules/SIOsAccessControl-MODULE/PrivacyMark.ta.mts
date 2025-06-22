/* eslint-disable */
import { ASN1Element as _Element, PrintableString, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PrivacyMark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  CHOICE {
 *   pString     PrintableString(SIZE (1..ub-privacy-mark-length)),
 *   utf8String  UTF8String(SIZE (1..ub-privacy-mark-length))
 * }
 * ```
 */
export type PrivacyMark =
    | { pString: PrintableString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PrivacyMark: $.ASN1Decoder<PrivacyMark> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivacyMark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivacyMark} The decoded data structure.
 */
export function _decode_PrivacyMark(el: _Element) {
    if (!_cached_decoder_for_PrivacyMark) {
        _cached_decoder_for_PrivacyMark = $._decode_inextensible_choice<PrivacyMark>(
            {
                "UNIVERSAL 19": ["pString", $._decodePrintableString],
                "UNIVERSAL 12": ["utf8String", $._decodeUTF8String],
            }
        );
    }
    return _cached_decoder_for_PrivacyMark(el);
}


let _cached_encoder_for_PrivacyMark: $.ASN1Encoder<PrivacyMark> | null = null;


/**
 * @summary Encodes a(n) PrivacyMark into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivacyMark, encoded as an ASN.1 Element.
 */
export function _encode_PrivacyMark(
    value: PrivacyMark,
    elGetter: $.ASN1Encoder<PrivacyMark>
) {
    if (!_cached_encoder_for_PrivacyMark) {
        _cached_encoder_for_PrivacyMark = $._encode_choice<PrivacyMark>(
            {
                pString: $._encodePrintableString,
                utf8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivacyMark(value, elGetter);
}


/* eslint-enable */
