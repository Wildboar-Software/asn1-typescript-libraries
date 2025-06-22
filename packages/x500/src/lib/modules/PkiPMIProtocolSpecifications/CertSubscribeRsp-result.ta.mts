/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CertSubscribeErr,
    _decode_CertSubscribeErr,
    _encode_CertSubscribeErr,
} from "../PkiPMIProtocolSpecifications/CertSubscribeErr.ta.mjs";
import {
    CertSubscribeOK,
    _decode_CertSubscribeOK,
    _encode_CertSubscribeOK,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK.ta.mjs";
/**
 * @summary CertSubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertSubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertSubscribeRsp_result: $.ASN1Decoder<CertSubscribeRsp_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertSubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp_result) {
        _cached_decoder_for_CertSubscribeRsp_result = $._decode_extensible_choice<CertSubscribeRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_explicit<CertSubscribeOK>(
                        () => _decode_CertSubscribeOK
                    ),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_explicit<CertSubscribeErr>(
                        () => _decode_CertSubscribeErr
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertSubscribeRsp_result(el);
}

let _cached_encoder_for_CertSubscribeRsp_result: $.ASN1Encoder<CertSubscribeRsp_result> | null = null;

/**
 * @summary Encodes a(n) CertSubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp_result(
    value: CertSubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertSubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertSubscribeRsp_result) {
        _cached_encoder_for_CertSubscribeRsp_result = $._encode_choice<CertSubscribeRsp_result>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK,
                    $.DER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertSubscribeRsp_result(value, elGetter);
}


/* eslint-enable */
