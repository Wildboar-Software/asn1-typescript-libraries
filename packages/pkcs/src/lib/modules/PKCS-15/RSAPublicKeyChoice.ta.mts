/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/AuthenticationFramework";
import {
    RSAPublicKey,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "../PKCS-1/RSAPublicKey.ta.mjs";


/**
 * @summary RSAPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAPublicKeyChoice  ::=  CHOICE {
 *     raw RSAPublicKey,
 *     spki [1] SubjectPublicKeyInfo, -- See X.509. Must contain a public RSA key
 *     ...
 * }
 * ```
 */
export type RSAPublicKeyChoice =
    | { raw: RSAPublicKey } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_RSAPublicKeyChoice: $.ASN1Decoder<RSAPublicKeyChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RSAPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAPublicKeyChoice} The decoded data structure.
 */
export function _decode_RSAPublicKeyChoice(el: _Element): RSAPublicKeyChoice {
    if (!_cached_decoder_for_RSAPublicKeyChoice) {
        _cached_decoder_for_RSAPublicKeyChoice = $._decode_extensible_choice<RSAPublicKeyChoice>(
            {
                "UNIVERSAL 16": ["raw", _decode_RSAPublicKey],
                "CONTEXT 1": [
                    "spki",
                    $._decode_implicit<SubjectPublicKeyInfo>(
                        () => _decode_SubjectPublicKeyInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RSAPublicKeyChoice(el);
}


let _cached_encoder_for_RSAPublicKeyChoice: $.ASN1Encoder<RSAPublicKeyChoice> | null = null;


/**
 * @summary Encodes a(n) RSAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_RSAPublicKeyChoice(
    value: RSAPublicKeyChoice,
    elGetter: $.ASN1Encoder<RSAPublicKeyChoice>
): _Element {
    if (!_cached_encoder_for_RSAPublicKeyChoice) {
        _cached_encoder_for_RSAPublicKeyChoice = $._encode_choice<RSAPublicKeyChoice>(
            {
                raw: _encode_RSAPublicKey,
                spki: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SubjectPublicKeyInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RSAPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
