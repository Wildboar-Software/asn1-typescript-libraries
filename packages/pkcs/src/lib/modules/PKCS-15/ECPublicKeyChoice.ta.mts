/* eslint-disable */
import {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "@wildboar/ansi-x9-62";
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary ECPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPublicKeyChoice  ::=  CHOICE {
 *     raw ECPoint,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public EC key
 *     ...
 * }
 * ```
 */
export type ECPublicKeyChoice =
    | { raw: ECPoint } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ECPublicKeyChoice: $.ASN1Decoder<ECPublicKeyChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ECPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPublicKeyChoice} The decoded data structure.
 */
export function _decode_ECPublicKeyChoice(el: _Element): ECPublicKeyChoice {
    if (!_cached_decoder_for_ECPublicKeyChoice) {
        _cached_decoder_for_ECPublicKeyChoice = $._decode_extensible_choice<ECPublicKeyChoice>(
            {
                "UNIVERSAL 4": ["raw", _decode_ECPoint],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_ECPublicKeyChoice(el);
}


let _cached_encoder_for_ECPublicKeyChoice: $.ASN1Encoder<ECPublicKeyChoice> | null = null;


/**
 * @summary Encodes a(n) ECPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_ECPublicKeyChoice(
    value: ECPublicKeyChoice,
    elGetter: $.ASN1Encoder<ECPublicKeyChoice>
): _Element {
    if (!_cached_encoder_for_ECPublicKeyChoice) {
        _cached_encoder_for_ECPublicKeyChoice = $._encode_choice<ECPublicKeyChoice>(
            {
                raw: _encode_ECPoint,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ECPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
