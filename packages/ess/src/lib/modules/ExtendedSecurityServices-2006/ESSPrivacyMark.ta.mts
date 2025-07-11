/* eslint-disable */
import { ASN1Element as _Element, PrintableString, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ESSPrivacyMark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESSPrivacyMark  ::=  CHOICE {
 *     pString      PrintableString (SIZE (1..ub-privacy-mark-length)),
 *     utf8String   UTF8String (SIZE (1..MAX))
 * }
 * ```
 */
export type ESSPrivacyMark =
    | { pString: PrintableString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ESSPrivacyMark: $.ASN1Decoder<ESSPrivacyMark> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ESSPrivacyMark
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ESSPrivacyMark} The decoded data structure.
 */
export function _decode_ESSPrivacyMark(el: _Element): ESSPrivacyMark {
    if (!_cached_decoder_for_ESSPrivacyMark) {
        _cached_decoder_for_ESSPrivacyMark = $._decode_inextensible_choice<ESSPrivacyMark>(
            {
                "UNIVERSAL 19": ["pString", $._decodePrintableString],
                "UNIVERSAL 12": ["utf8String", $._decodeUTF8String],
            }
        );
    }
    return _cached_decoder_for_ESSPrivacyMark(el);
}


let _cached_encoder_for_ESSPrivacyMark: $.ASN1Encoder<ESSPrivacyMark> | null = null;


/**
 * @summary Encodes a(n) ESSPrivacyMark into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESSPrivacyMark, encoded as an ASN.1 Element.
 */
export function _encode_ESSPrivacyMark(
    value: ESSPrivacyMark,
    elGetter: $.ASN1Encoder<ESSPrivacyMark>
): _Element {
    if (!_cached_encoder_for_ESSPrivacyMark) {
        _cached_encoder_for_ESSPrivacyMark = $._encode_choice<ESSPrivacyMark>(
            {
                pString: $._encodePrintableString,
                utf8String: $._encodeUTF8String,
            },
            $.DER
        );
    }
    return _cached_encoder_for_ESSPrivacyMark(value, elGetter);
}


/* eslint-enable */
