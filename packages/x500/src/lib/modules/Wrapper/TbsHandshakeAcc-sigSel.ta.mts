/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
/**
 * @summary TbsHandshakeAcc_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TbsHandshakeAcc_sigSel: $.ASN1Decoder<TbsHandshakeAcc_sigSel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_sigSel) {
        _cached_decoder_for_TbsHandshakeAcc_sigSel = $._decode_inextensible_choice<TbsHandshakeAcc_sigSel>(
            {
                "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
                "CONTEXT 0": [
                    "altSigAlg",
                    $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbsHandshakeAcc_sigSel(el);
}

let _cached_encoder_for_TbsHandshakeAcc_sigSel: $.ASN1Encoder<TbsHandshakeAcc_sigSel> | null = null;

/**
 * @summary Encodes a(n) TbsHandshakeAcc_sigSel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_sigSel(
    value: TbsHandshakeAcc_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_sigSel) {
        _cached_encoder_for_TbsHandshakeAcc_sigSel = $._encode_choice<TbsHandshakeAcc_sigSel>(
            {
                sigAlg: _encode_AlgorithmIdentifier,
                altSigAlg: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_sigSel(value, elGetter);
}


/* eslint-enable */
