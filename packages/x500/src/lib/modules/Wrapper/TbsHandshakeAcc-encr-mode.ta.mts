/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
import {
    TbsHandshakeAcc_encr_mode_non_aead,
    _decode_TbsHandshakeAcc_encr_mode_non_aead,
    _encode_TbsHandshakeAcc_encr_mode_non_aead,
} from "../Wrapper/TbsHandshakeAcc-encr-mode-non-aead.ta.mjs";
/**
 * @summary TbsHandshakeAcc_encr_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-encr-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_encr_mode =
    | { aead: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { non_aead: TbsHandshakeAcc_encr_mode_non_aead } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TbsHandshakeAcc_encr_mode: $.ASN1Decoder<TbsHandshakeAcc_encr_mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_encr_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_encr_mode} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_encr_mode(el: _Element): TbsHandshakeAcc_encr_mode {
    if (!_cached_decoder_for_TbsHandshakeAcc_encr_mode) {
        _cached_decoder_for_TbsHandshakeAcc_encr_mode = $._decode_extensible_choice<TbsHandshakeAcc_encr_mode>(
            {
                "CONTEXT 2": [
                    "aead",
                    $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    ),
                ],
                "CONTEXT 3": [
                    "non_aead",
                    $._decode_implicit<TbsHandshakeAcc_encr_mode_non_aead>(
                        () => _decode_TbsHandshakeAcc_encr_mode_non_aead
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbsHandshakeAcc_encr_mode(el);
}

let _cached_encoder_for_TbsHandshakeAcc_encr_mode: $.ASN1Encoder<TbsHandshakeAcc_encr_mode> | null = null;

/**
 * @summary Encodes a(n) TbsHandshakeAcc_encr_mode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_encr_mode, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_encr_mode(
    value: TbsHandshakeAcc_encr_mode,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_encr_mode>
): _Element {
    if (!_cached_encoder_for_TbsHandshakeAcc_encr_mode) {
        _cached_encoder_for_TbsHandshakeAcc_encr_mode = $._encode_choice<TbsHandshakeAcc_encr_mode>(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AlgorithmIdentifier,
                    $.DER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TbsHandshakeAcc_encr_mode_non_aead,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_encr_mode(value, elGetter);
}


/* eslint-enable */
