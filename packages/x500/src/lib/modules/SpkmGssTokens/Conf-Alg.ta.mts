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
 * @summary Conf_Alg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conf-Alg  ::=  CHOICE {
 *   algId  [0]  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   null   [1]  NULL
 * }
 * ```
 */
export type Conf_Alg =
    | { algId: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Conf_Alg: $.ASN1Decoder<Conf_Alg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conf_Alg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Conf_Alg} The decoded data structure.
 */
export function _decode_Conf_Alg(el: _Element) {
    if (!_cached_decoder_for_Conf_Alg) {
        _cached_decoder_for_Conf_Alg = $._decode_inextensible_choice<Conf_Alg>({
            "CONTEXT 0": [
                "algId",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
            "CONTEXT 1": [
                "null_",
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
        });
    }
    return _cached_decoder_for_Conf_Alg(el);
}

let _cached_encoder_for_Conf_Alg: $.ASN1Encoder<Conf_Alg> | null = null;

/**
 * @summary Encodes a(n) Conf_Alg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conf_Alg, encoded as an ASN.1 Element.
 */
export function _encode_Conf_Alg(
    value: Conf_Alg,
    elGetter: $.ASN1Encoder<Conf_Alg>
) {
    if (!_cached_encoder_for_Conf_Alg) {
        _cached_encoder_for_Conf_Alg = $._encode_choice<Conf_Alg>(
            {
                algId: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
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
    return _cached_encoder_for_Conf_Alg(value, elGetter);
}


/* eslint-enable */
