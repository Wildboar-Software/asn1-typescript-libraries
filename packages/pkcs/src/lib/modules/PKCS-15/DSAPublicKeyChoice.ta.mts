/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary DSAPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPublicKeyChoice  ::=  CHOICE {
 *     raw INTEGER,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public DSA key.
 *     ...
 * }
 * ```
 */
export type DSAPublicKeyChoice =
    | { raw: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_DSAPublicKeyChoice: $.ASN1Decoder<DSAPublicKeyChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DSAPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAPublicKeyChoice} The decoded data structure.
 */
export function _decode_DSAPublicKeyChoice(el: _Element): DSAPublicKeyChoice {
    if (!_cached_decoder_for_DSAPublicKeyChoice) {
        _cached_decoder_for_DSAPublicKeyChoice = $._decode_extensible_choice<DSAPublicKeyChoice>(
            {
                "UNIVERSAL 2": ["raw", $._decodeBigInt],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_DSAPublicKeyChoice(el);
}


let _cached_encoder_for_DSAPublicKeyChoice: $.ASN1Encoder<DSAPublicKeyChoice> | null = null;


/**
 * @summary Encodes a(n) DSAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_DSAPublicKeyChoice(
    value: DSAPublicKeyChoice,
    elGetter: $.ASN1Encoder<DSAPublicKeyChoice>
): _Element {
    if (!_cached_encoder_for_DSAPublicKeyChoice) {
        _cached_encoder_for_DSAPublicKeyChoice = $._encode_choice<DSAPublicKeyChoice>(
            {
                raw: $._encodeBigInt,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DSAPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
