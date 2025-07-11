/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AddAvlErr,
    _decode_AddAvlErr,
    _encode_AddAvlErr,
} from "../AVL-management/AddAvlErr.ta.mjs";
import {
    AddAvlOK,
    _decode_AddAvlOK,
    _encode_AddAvlOK,
} from "../AVL-management/AddAvlOK.ta.mjs";
/**
 * @summary AddAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddAvlRsp_result =
    | { success: AddAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: AddAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AddAvlRsp_result: $.ASN1Decoder<AddAvlRsp_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp_result} The decoded data structure.
 */
export function _decode_AddAvlRsp_result(el: _Element): AddAvlRsp_result {
    if (!_cached_decoder_for_AddAvlRsp_result) {
        _cached_decoder_for_AddAvlRsp_result = $._decode_extensible_choice<AddAvlRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<AddAvlOK>(() => _decode_AddAvlOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<AddAvlErr>(() => _decode_AddAvlErr),
                ],
            }
        );
    }
    return _cached_decoder_for_AddAvlRsp_result(el);
}

let _cached_encoder_for_AddAvlRsp_result: $.ASN1Encoder<AddAvlRsp_result> | null = null;

/**
 * @summary Encodes a(n) AddAvlRsp_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp_result(
    value: AddAvlRsp_result,
    elGetter: $.ASN1Encoder<AddAvlRsp_result>
): _Element {
    if (!_cached_encoder_for_AddAvlRsp_result) {
        _cached_encoder_for_AddAvlRsp_result = $._encode_choice<AddAvlRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AddAvlOK,
                    $.DER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddAvlErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_AddAvlRsp_result(value, elGetter);
}


/* eslint-enable */
