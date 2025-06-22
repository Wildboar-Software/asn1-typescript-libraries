/* eslint-disable */
import {
    DiffieHellmanPublicNumber,
    _decode_DiffieHellmanPublicNumber,
    _encode_DiffieHellmanPublicNumber,
} from "@wildboar/ansi-x9-42/src/lib/modules/ANSI-X9-42/DiffieHellmanPublicNumber.ta.mjs";
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary DHPublicKeyChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicKeyChoice  ::=  CHOICE {
 *     raw DiffieHellmanPublicNumber,
 *     spki SubjectPublicKeyInfo, -- See X.509. Must contain a public D-H key
 *     ...
 * }
 * ```
 */
export type DHPublicKeyChoice =
    | { raw: DiffieHellmanPublicNumber } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_DHPublicKeyChoice: $.ASN1Decoder<DHPublicKeyChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DHPublicKeyChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHPublicKeyChoice} The decoded data structure.
 */
export function _decode_DHPublicKeyChoice(el: _Element) {
    if (!_cached_decoder_for_DHPublicKeyChoice) {
        _cached_decoder_for_DHPublicKeyChoice = $._decode_extensible_choice<DHPublicKeyChoice>(
            {
                "UNIVERSAL 2": ["raw", _decode_DiffieHellmanPublicNumber],
                "UNIVERSAL 16": ["spki", _decode_SubjectPublicKeyInfo],
            }
        );
    }
    return _cached_decoder_for_DHPublicKeyChoice(el);
}


let _cached_encoder_for_DHPublicKeyChoice: $.ASN1Encoder<DHPublicKeyChoice> | null = null;


/**
 * @summary Encodes a(n) DHPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHPublicKeyChoice, encoded as an ASN.1 Element.
 */
export function _encode_DHPublicKeyChoice(
    value: DHPublicKeyChoice,
    elGetter: $.ASN1Encoder<DHPublicKeyChoice>
) {
    if (!_cached_encoder_for_DHPublicKeyChoice) {
        _cached_encoder_for_DHPublicKeyChoice = $._encode_choice<DHPublicKeyChoice>(
            {
                raw: _encode_DiffieHellmanPublicNumber,
                spki: _encode_SubjectPublicKeyInfo,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DHPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
