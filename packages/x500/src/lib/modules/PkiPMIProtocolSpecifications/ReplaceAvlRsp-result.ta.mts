/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RepAvlErr,
    _decode_RepAvlErr,
    _encode_RepAvlErr,
} from "../PkiPMIProtocolSpecifications/RepAvlErr.ta.mjs";
import {
    RepAvlOK,
    _decode_RepAvlOK,
    _encode_RepAvlOK,
} from "../PkiPMIProtocolSpecifications/RepAvlOK.ta.mjs";
/**
 * @summary ReplaceAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReplaceAvlRsp_result =
    | { success: RepAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: RepAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ReplaceAvlRsp_result: $.ASN1Decoder<ReplaceAvlRsp_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp_result} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp_result) {
        _cached_decoder_for_ReplaceAvlRsp_result = $._decode_extensible_choice<ReplaceAvlRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_explicit<RepAvlOK>(() => _decode_RepAvlOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_explicit<RepAvlErr>(() => _decode_RepAvlErr),
                ],
            }
        );
    }
    return _cached_decoder_for_ReplaceAvlRsp_result(el);
}

let _cached_encoder_for_ReplaceAvlRsp_result: $.ASN1Encoder<ReplaceAvlRsp_result> | null = null;

/**
 * @summary Encodes a(n) ReplaceAvlRsp_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp_result(
    value: ReplaceAvlRsp_result,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp_result>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp_result) {
        _cached_encoder_for_ReplaceAvlRsp_result = $._encode_choice<ReplaceAvlRsp_result>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_RepAvlOK,
                    $.DER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_RepAvlErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ReplaceAvlRsp_result(value, elGetter);
}


/* eslint-enable */
