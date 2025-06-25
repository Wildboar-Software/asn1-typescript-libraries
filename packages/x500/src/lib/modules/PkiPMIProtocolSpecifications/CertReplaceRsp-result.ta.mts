/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertReplaceErr,
    _decode_CertReplaceErr,
    _encode_CertReplaceErr,
} from "../PkiPMIProtocolSpecifications/CertReplaceErr.ta.mjs";
import {
    CertReplaceOK,
    _decode_CertReplaceOK,
    _encode_CertReplaceOK,
} from "../PkiPMIProtocolSpecifications/CertReplaceOK.ta.mjs";
/**
 * @summary CertReplaceRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceRsp_result =
    | { success: CertReplaceOK } /* CHOICE_ALT_ROOT */
    | { failure: CertReplaceErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertReplaceRsp_result: $.ASN1Decoder<CertReplaceRsp_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp_result} The decoded data structure.
 */
export function _decode_CertReplaceRsp_result(el: _Element): CertReplaceRsp_result {
    if (!_cached_decoder_for_CertReplaceRsp_result) {
        _cached_decoder_for_CertReplaceRsp_result = $._decode_extensible_choice<CertReplaceRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_explicit<CertReplaceOK>(
                        () => _decode_CertReplaceOK
                    ),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_explicit<CertReplaceErr>(
                        () => _decode_CertReplaceErr
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertReplaceRsp_result(el);
}

let _cached_encoder_for_CertReplaceRsp_result: $.ASN1Encoder<CertReplaceRsp_result> | null = null;

/**
 * @summary Encodes a(n) CertReplaceRsp_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp_result(
    value: CertReplaceRsp_result,
    elGetter: $.ASN1Encoder<CertReplaceRsp_result>
): _Element {
    if (!_cached_encoder_for_CertReplaceRsp_result) {
        _cached_encoder_for_CertReplaceRsp_result = $._encode_choice<CertReplaceRsp_result>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK,
                    $.DER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceErr,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertReplaceRsp_result(value, elGetter);
}


/* eslint-enable */
