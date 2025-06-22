/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
 * @summary TbpDataTransferServer_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbpDataTransferServer_conf =
    | { clear: WrappedProt } /* CHOICE_ALT_ROOT */
    | { protected_: ENCIPHERED<_Element> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TbpDataTransferServer_conf: $.ASN1Decoder<TbpDataTransferServer_conf> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer_conf} The decoded data structure.
 */
export function _decode_TbpDataTransferServer_conf(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferServer_conf) {
        _cached_decoder_for_TbpDataTransferServer_conf = $._decode_extensible_choice<TbpDataTransferServer_conf>(
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
    return _cached_decoder_for_TbpDataTransferServer_conf(el);
}

let _cached_encoder_for_TbpDataTransferServer_conf: $.ASN1Encoder<TbpDataTransferServer_conf> | null = null;

/**
 * @summary Encodes a(n) TbpDataTransferServer_conf into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer_conf, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer_conf(
    value: TbpDataTransferServer_conf,
    elGetter: $.ASN1Encoder<TbpDataTransferServer_conf>
) {
    if (!_cached_encoder_for_TbpDataTransferServer_conf) {
        _cached_encoder_for_TbpDataTransferServer_conf = $._encode_choice<TbpDataTransferServer_conf>(
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
    return _cached_encoder_for_TbpDataTransferServer_conf(value, elGetter);
}


/* eslint-enable */
