/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta.mjs";
import {
    PkiWaError,
    _decode_PkiWaError,
    _encode_PkiWaError,
} from "../PkiPmiWrapper/PkiWaError.ta.mjs";
/**
 * @summary CertErr_notOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr-notOK ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertErr_notOK =
    | { wrErr: PkiWaError } /* CHOICE_ALT_ROOT */
    | { avmpErr: AVMP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertErr_notOK: $.ASN1Decoder<CertErr_notOK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertErr_notOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr_notOK} The decoded data structure.
 */
export function _decode_CertErr_notOK(el: _Element) {
    if (!_cached_decoder_for_CertErr_notOK) {
        _cached_decoder_for_CertErr_notOK = $._decode_extensible_choice<CertErr_notOK>(
            {
                "CONTEXT 0": [
                    "wrErr",
                    $._decode_explicit<PkiWaError>(() => _decode_PkiWaError),
                ],
                "CONTEXT 1": [
                    "avmpErr",
                    $._decode_explicit<AVMP_error>(() => _decode_AVMP_error),
                ],
            }
        );
    }
    return _cached_decoder_for_CertErr_notOK(el);
}

let _cached_encoder_for_CertErr_notOK: $.ASN1Encoder<CertErr_notOK> | null = null;

/**
 * @summary Encodes a(n) CertErr_notOK into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr_notOK, encoded as an ASN.1 Element.
 */
export function _encode_CertErr_notOK(
    value: CertErr_notOK,
    elGetter: $.ASN1Encoder<CertErr_notOK>
) {
    if (!_cached_encoder_for_CertErr_notOK) {
        _cached_encoder_for_CertErr_notOK = $._encode_choice<CertErr_notOK>(
            {
                wrErr: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PkiWaError,
                    $.DER
                ),
                avmpErr: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AVMP_error,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertErr_notOK(value, elGetter);
}


/* eslint-enable */
