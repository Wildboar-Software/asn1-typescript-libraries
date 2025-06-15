/* eslint-disable */
import {
    ASN1Element as _Element,
    BMPString,
    UTF8String,
    VisibleString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary DisplayText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisplayText  ::=  CHOICE {
 *   visibleString  VisibleString(SIZE (1..200)),
 *   bmpString      BMPString(SIZE (1..200)),
 *   utf8String     UTF8String(SIZE (1..200))
 * }
 * ```
 */
export type DisplayText =
    | { visibleString: VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DisplayText: $.ASN1Decoder<DisplayText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisplayText} The decoded data structure.
 */
export function _decode_DisplayText(el: _Element) {
    if (!_cached_decoder_for_DisplayText) {
        _cached_decoder_for_DisplayText = $._decode_inextensible_choice<DisplayText>(
            {
                "UNIVERSAL 26": ["visibleString", $._decodeVisibleString],
                "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
                "UNIVERSAL 12": ["utf8String", $._decodeUTF8String],
            }
        );
    }
    return _cached_decoder_for_DisplayText(el);
}

let _cached_encoder_for_DisplayText: $.ASN1Encoder<DisplayText> | null = null;

/**
 * @summary Encodes a(n) DisplayText into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayText, encoded as an ASN.1 Element.
 */
export function _encode_DisplayText(
    value: DisplayText,
    elGetter: $.ASN1Encoder<DisplayText>
) {
    if (!_cached_encoder_for_DisplayText) {
        _cached_encoder_for_DisplayText = $._encode_choice<DisplayText>(
            {
                visibleString: $._encodeVisibleString,
                bmpString: $._encodeBMPString,
                utf8String: $._encodeUTF8String,
            },
            $.DER
        );
    }
    return _cached_encoder_for_DisplayText(value, elGetter);
}


/* eslint-enable */
