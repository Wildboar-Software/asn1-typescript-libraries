/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ENCIPHERED,
    _get_decoder_for_ENCIPHERED,
    _get_encoder_for_ENCIPHERED,
} from "../CryptoTools/ENCIPHERED.ta.mjs";
import {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta.mjs";
/**
 * @summary TbpDataTransferClient_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferClient-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbpDataTransferClient_conf =
    | { clear: WrappedProt } /* CHOICE_ALT_ROOT */
    | { protected_: ENCIPHERED<_Element> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TbpDataTransferClient_conf: $.ASN1Decoder<TbpDataTransferClient_conf> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferClient_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferClient_conf} The decoded data structure.
 */
export function _decode_TbpDataTransferClient_conf(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferClient_conf) {
        _cached_decoder_for_TbpDataTransferClient_conf = $._decode_extensible_choice<TbpDataTransferClient_conf>(
            {
                "CONTEXT 4": [
                    "clear",
                    $._decode_implicit<WrappedProt>(() => _decode_WrappedProt),
                ],
                "CONTEXT 5": [
                    "protected_",
                    $._decode_implicit<ENCIPHERED<_Element>>(() =>
                        _get_decoder_for_ENCIPHERED<_Element>($._decodeAny)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbpDataTransferClient_conf(el);
}

let _cached_encoder_for_TbpDataTransferClient_conf: $.ASN1Encoder<TbpDataTransferClient_conf> | null = null;

/**
 * @summary Encodes a(n) TbpDataTransferClient_conf into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferClient_conf, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferClient_conf(
    value: TbpDataTransferClient_conf,
    elGetter: $.ASN1Encoder<TbpDataTransferClient_conf>
) {
    if (!_cached_encoder_for_TbpDataTransferClient_conf) {
        _cached_encoder_for_TbpDataTransferClient_conf = $._encode_choice<TbpDataTransferClient_conf>(
            {
                clear: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_WrappedProt,
                    $.DER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _get_encoder_for_ENCIPHERED<_Element>($._encodeAny),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TbpDataTransferClient_conf(value, elGetter);
}


/* eslint-enable */
