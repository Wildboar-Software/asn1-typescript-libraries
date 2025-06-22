/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INSTANCE_OF,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CRLReferral,
    _decode_CRLReferral,
    _encode_CRLReferral,
} from "../CertificateExtensions/CRLReferral.ta.mjs";
/**
 * @summary StatusReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StatusReferral  ::=  CHOICE {
 *   cRLReferral    [0]  CRLReferral,
 *   otherReferral  [1]  INSTANCE OF OTHER-REFERRAL,
 *   ... }
 * ```
 */
export type StatusReferral =
    | { cRLReferral: CRLReferral } /* CHOICE_ALT_ROOT */
    | { otherReferral: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_StatusReferral: $.ASN1Decoder<StatusReferral> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatusReferral} The decoded data structure.
 */
export function _decode_StatusReferral(el: _Element) {
    if (!_cached_decoder_for_StatusReferral) {
        _cached_decoder_for_StatusReferral = $._decode_extensible_choice<StatusReferral>(
            {
                "CONTEXT 0": [
                    "cRLReferral",
                    $._decode_implicit<CRLReferral>(() => _decode_CRLReferral),
                ],
                "CONTEXT 1": [
                    "otherReferral",
                    $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf),
                ],
            }
        );
    }
    return _cached_decoder_for_StatusReferral(el);
}

let _cached_encoder_for_StatusReferral: $.ASN1Encoder<StatusReferral> | null = null;

/**
 * @summary Encodes a(n) StatusReferral into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferral, encoded as an ASN.1 Element.
 */
export function _encode_StatusReferral(
    value: StatusReferral,
    elGetter: $.ASN1Encoder<StatusReferral>
) {
    if (!_cached_encoder_for_StatusReferral) {
        _cached_encoder_for_StatusReferral = $._encode_choice<StatusReferral>(
            {
                cRLReferral: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CRLReferral,
                    $.DER
                ),
                otherReferral: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInstanceOf,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_StatusReferral(value, elGetter);
}


/* eslint-enable */
