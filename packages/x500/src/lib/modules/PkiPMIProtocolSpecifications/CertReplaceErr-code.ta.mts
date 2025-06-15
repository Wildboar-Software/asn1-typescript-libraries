/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta.mjs";
import {
    EnvelopedData_error,
    _decode_EnvelopedData_error,
    _encode_EnvelopedData_error,
} from "../PkiPMIProtocolSpecifications/EnvelopedData-error.ta.mjs";
import {
    SignedData_error,
    _decode_SignedData_error,
    _encode_SignedData_error,
} from "../PkiPMIProtocolSpecifications/SignedData-error.ta.mjs";
/**
 * @summary CertReplaceErr_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr-code ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceErr_code =
    | { signedData: SignedData_error } /* CHOICE_ALT_ROOT */
    | { envelopedData: EnvelopedData_error } /* CHOICE_ALT_ROOT */
    | { casp: CASP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertReplaceErr_code: $.ASN1Decoder<CertReplaceErr_code> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr_code} The decoded data structure.
 */
export function _decode_CertReplaceErr_code(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr_code) {
        _cached_decoder_for_CertReplaceErr_code = $._decode_extensible_choice<CertReplaceErr_code>(
            {
                "CONTEXT 0": [
                    "signedData",
                    $._decode_explicit<SignedData_error>(
                        () => _decode_SignedData_error
                    ),
                ],
                "CONTEXT 1": [
                    "envelopedData",
                    $._decode_explicit<EnvelopedData_error>(
                        () => _decode_EnvelopedData_error
                    ),
                ],
                "CONTEXT 2": [
                    "casp",
                    $._decode_explicit<CASP_error>(() => _decode_CASP_error),
                ],
            }
        );
    }
    return _cached_decoder_for_CertReplaceErr_code(el);
}

let _cached_encoder_for_CertReplaceErr_code: $.ASN1Encoder<CertReplaceErr_code> | null = null;

/**
 * @summary Encodes a(n) CertReplaceErr_code into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr_code, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr_code(
    value: CertReplaceErr_code,
    elGetter: $.ASN1Encoder<CertReplaceErr_code>
) {
    if (!_cached_encoder_for_CertReplaceErr_code) {
        _cached_encoder_for_CertReplaceErr_code = $._encode_choice<CertReplaceErr_code>(
            {
                signedData: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SignedData_error,
                    $.DER
                ),
                envelopedData: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_EnvelopedData_error,
                    $.DER
                ),
                casp: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_CASP_error,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertReplaceErr_code(value, elGetter);
}


/* eslint-enable */
