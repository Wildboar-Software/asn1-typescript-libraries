/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    URL_urlWithDigest,
    _decode_URL_urlWithDigest,
    _encode_URL_urlWithDigest,
} from "../PKCS-15/URL-urlWithDigest.ta.mjs";

/**
 * @summary URL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URL  ::=  CHOICE {
 *     url PrintableString,
 *     urlWithDigest [3] SEQUENCE {
 *         url IA5String,
 *         digest DigestInfoWithDefault
 *     }
 * }
 * ```
 */
export type URL =
    | { url: PrintableString } /* CHOICE_ALT_ROOT */
    | { urlWithDigest: URL_urlWithDigest } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_URL: $.ASN1Decoder<URL> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) URL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URL} The decoded data structure.
 */
export function _decode_URL(el: _Element): URL {
    if (!_cached_decoder_for_URL) {
        _cached_decoder_for_URL = $._decode_inextensible_choice<URL>({
            "UNIVERSAL 19": ["url", $._decodePrintableString],
            "CONTEXT 3": [
                "urlWithDigest",
                $._decode_implicit<URL_urlWithDigest>(
                    () => _decode_URL_urlWithDigest
                ),
            ],
        });
    }
    return _cached_decoder_for_URL(el);
}


let _cached_encoder_for_URL: $.ASN1Encoder<URL> | null = null;


/**
 * @summary Encodes a(n) URL into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URL, encoded as an ASN.1 Element.
 */
export function _encode_URL(value: URL, elGetter: $.ASN1Encoder<URL>): _Element {
    if (!_cached_encoder_for_URL) {
        _cached_encoder_for_URL = $._encode_choice<URL>(
            {
                url: $._encodePrintableString,
                urlWithDigest: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_URL_urlWithDigest,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_URL(value, elGetter);
}


/* eslint-enable */
