/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PKIFreeText
 * @description
 *
 * Human-oriented free text from PKIXCMP
 * ([RFC 2510](https://datatracker.ietf.org/doc/html/rfc2510) §3.1.1),
 * imported by the TSP ASN.1 module
 * ([RFC 3161](https://datatracker.ietf.org/doc/html/rfc3161) Appendix A).
 * A sequence of one or more UTF-8 strings.
 *
 * > text encoded as UTF-8 String (note: each UTF8String SHOULD
 * > include an RFC 1766 language tag to indicate the language
 * > of the contained text)
 * >
 * > — [RFC 2510 §3.1.1](https://datatracker.ietf.org/doc/html/rfc2510#section-3.1.1)
 *
 * In TSP, used as `PKIStatusInfo.statusString` for optional reason text
 * (e.g., `"messageImprint field is not correctly formatted"`)
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFreeText  ::=  SEQUENCE SIZE (1..MAX) OF UTF8String
 * ```
 */
export type PKIFreeText = UTF8String[]; // SequenceOfType

let _cached_decoder_for_PKIFreeText: $.ASN1Decoder<PKIFreeText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PKIFreeText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIFreeText} The decoded data structure.
 */
export function _decode_PKIFreeText(el: _Element): PKIFreeText {
    if (!_cached_decoder_for_PKIFreeText) {
        _cached_decoder_for_PKIFreeText = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_PKIFreeText(el);
}

let _cached_encoder_for_PKIFreeText: $.ASN1Encoder<PKIFreeText> | null = null;

/**
 * @summary Encodes a(n) PKIFreeText into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIFreeText, encoded as an ASN.1 Element.
 */
export function _encode_PKIFreeText(
    value: PKIFreeText,
    elGetter: $.ASN1Encoder<PKIFreeText>
): _Element {
    if (!_cached_encoder_for_PKIFreeText) {
        _cached_encoder_for_PKIFreeText = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.DER
        );
    }
    return _cached_encoder_for_PKIFreeText(value, elGetter);
}


/* eslint-enable */
