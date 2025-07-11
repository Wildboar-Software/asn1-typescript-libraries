/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary Conf_Algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conf-Algs  ::=  CHOICE {
 *   algs  [0]  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null  [1]  NULL
 * }
 * ```
 */
export type Conf_Algs =
    | { algs: AlgorithmIdentifier[] } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Conf_Algs: $.ASN1Decoder<Conf_Algs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conf_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conf_Algs} The decoded data structure.
 */
export function _decode_Conf_Algs(el: _Element): Conf_Algs {
    if (!_cached_decoder_for_Conf_Algs) {
        _cached_decoder_for_Conf_Algs = $._decode_inextensible_choice<Conf_Algs>(
            {
                "CONTEXT 0": [
                    "algs",
                    $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "null_",
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_Conf_Algs(el);
}

let _cached_encoder_for_Conf_Algs: $.ASN1Encoder<Conf_Algs> | null = null;

/**
 * @summary Encodes a(n) Conf_Algs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Conf_Algs(
    value: Conf_Algs,
    elGetter: $.ASN1Encoder<Conf_Algs>
): _Element {
    if (!_cached_encoder_for_Conf_Algs) {
        _cached_encoder_for_Conf_Algs = $._encode_choice<Conf_Algs>(
            {
                algs: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<AlgorithmIdentifier>(
                            () => _encode_AlgorithmIdentifier,
                            $.DER
                        ),
                    $.DER
                ),
                null_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_Conf_Algs(value, elGetter);
}


/* eslint-enable */
