/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "@wildboar/x500/AttributeCertificateDefinitions";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/AuthenticationFramework";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../PKCS7/ExtendedCertificate.ta.mjs";


/**
 * @summary CertificateChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateChoice  ::=  CHOICE {
 *     certificate           Certificate,
 *     extendedCertificate   [0]  ExtendedCertificate, -- Obsolete
 *     attributeCertificate  [1]  AttributeCertificate
 * }
 * ```
 */
export type CertificateChoice =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attributeCertificate: AttributeCertificate } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CertificateChoice: $.ASN1Decoder<CertificateChoice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateChoice} The decoded data structure.
 */
export function _decode_CertificateChoice(el: _Element): CertificateChoice {
    if (!_cached_decoder_for_CertificateChoice) {
        _cached_decoder_for_CertificateChoice = $._decode_inextensible_choice<CertificateChoice>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
                "CONTEXT 1": [
                    "attributeCertificate",
                    $._decode_implicit<AttributeCertificate>(
                        () => _decode_AttributeCertificate
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateChoice(el);
}


let _cached_encoder_for_CertificateChoice: $.ASN1Encoder<CertificateChoice> | null = null;


/**
 * @summary Encodes a(n) CertificateChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoice, encoded as an ASN.1 Element.
 */
export function _encode_CertificateChoice(
    value: CertificateChoice,
    elGetter: $.ASN1Encoder<CertificateChoice>
): _Element {
    if (!_cached_encoder_for_CertificateChoice) {
        _cached_encoder_for_CertificateChoice = $._encode_choice<CertificateChoice>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.BER
                ),
                attributeCertificate: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeCertificate,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateChoice(value, elGetter);
}


/* eslint-enable */
