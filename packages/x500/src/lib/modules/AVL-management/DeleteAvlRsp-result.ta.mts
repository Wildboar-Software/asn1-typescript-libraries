/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    DelAvlErr,
    _decode_DelAvlErr,
    _encode_DelAvlErr,
} from "../AVL-management/DelAvlErr.ta.mjs";
import {
    DelAvlOK,
    _decode_DelAvlOK,
    _encode_DelAvlOK,
} from "../AVL-management/DelAvlOK.ta.mjs";
/* START_OF_SYMBOL_DEFINITION DeleteAvlRsp_result */
/**
 * @summary DeleteAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DeleteAvlRsp_result =
    | { success: DelAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: DelAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DeleteAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteAvlRsp_result */
let _cached_decoder_for_DeleteAvlRsp_result: $.ASN1Decoder<DeleteAvlRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteAvlRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteAvlRsp_result} The decoded data structure.
 */
export function _decode_DeleteAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_DeleteAvlRsp_result) {
        _cached_decoder_for_DeleteAvlRsp_result = $._decode_extensible_choice<DeleteAvlRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<DelAvlOK>(() => _decode_DelAvlOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<DelAvlErr>(() => _decode_DelAvlErr),
                ],
            }
        );
    }
    return _cached_decoder_for_DeleteAvlRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteAvlRsp_result */
let _cached_encoder_for_DeleteAvlRsp_result: $.ASN1Encoder<DeleteAvlRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteAvlRsp_result */
/**
 * @summary Encodes a(n) DeleteAvlRsp_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_DeleteAvlRsp_result(
    value: DeleteAvlRsp_result,
    elGetter: $.ASN1Encoder<DeleteAvlRsp_result>
) {
    if (!_cached_encoder_for_DeleteAvlRsp_result) {
        _cached_encoder_for_DeleteAvlRsp_result = $._encode_choice<DeleteAvlRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DelAvlOK,
                    $.DER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DelAvlErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_DeleteAvlRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteAvlRsp_result */

/* eslint-enable */
