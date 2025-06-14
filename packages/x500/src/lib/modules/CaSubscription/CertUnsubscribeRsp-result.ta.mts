/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertUnsubscribeErr,
    _decode_CertUnsubscribeErr,
    _encode_CertUnsubscribeErr,
} from "../CaSubscription/CertUnsubscribeErr.ta.mjs";
import {
    CertUnsubscribeOK,
    _decode_CertUnsubscribeOK,
    _encode_CertUnsubscribeOK,
} from "../CaSubscription/CertUnsubscribeOK.ta.mjs";
/* START_OF_SYMBOL_DEFINITION CertUnsubscribeRsp_result */
/**
 * @summary CertUnsubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeRsp_result =
    | { success: CertUnsubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUnsubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertUnsubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeRsp_result */
let _cached_decoder_for_CertUnsubscribeRsp_result: $.ASN1Decoder<CertUnsubscribeRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertUnsubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeRsp_result) {
        _cached_decoder_for_CertUnsubscribeRsp_result = $._decode_extensible_choice<CertUnsubscribeRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<CertUnsubscribeOK>(
                        () => _decode_CertUnsubscribeOK
                    ),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<CertUnsubscribeErr>(
                        () => _decode_CertUnsubscribeErr
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertUnsubscribeRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeRsp_result */
let _cached_encoder_for_CertUnsubscribeRsp_result: $.ASN1Encoder<CertUnsubscribeRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeRsp_result */
/**
 * @summary Encodes a(n) CertUnsubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeRsp_result(
    value: CertUnsubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertUnsubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertUnsubscribeRsp_result) {
        _cached_encoder_for_CertUnsubscribeRsp_result = $._encode_choice<CertUnsubscribeRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK,
                    $.DER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertUnsubscribeRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeRsp_result */

/* eslint-enable */
