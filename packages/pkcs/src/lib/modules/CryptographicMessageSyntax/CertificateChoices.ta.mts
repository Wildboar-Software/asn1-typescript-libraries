/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "@wildboar/x500/src/lib/modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../CryptographicMessageSyntax/ExtendedCertificate.ta.mjs";


/**
 * @summary CertificateChoices
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateChoices  ::=  CHOICE {
 *   certificate          Certificate, -- See X.509
 *   extendedCertificate  [0] IMPLICIT ExtendedCertificate, -- Obsolete
 *   attrCert             [1] IMPLICIT AttributeCertificate
 * }
 * ```
 */
export type CertificateChoices =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attrCert: AttributeCertificate } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CertificateChoices: $.ASN1Decoder<CertificateChoices> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoices
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateChoices} The decoded data structure.
 */
export function _decode_CertificateChoices(el: _Element): CertificateChoices {
    if (!_cached_decoder_for_CertificateChoices) {
        _cached_decoder_for_CertificateChoices = $._decode_inextensible_choice<CertificateChoices>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
                "CONTEXT 1": [
                    "attrCert",
                    $._decode_implicit<AttributeCertificate>(
                        () => _decode_AttributeCertificate
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateChoices(el);
}


let _cached_encoder_for_CertificateChoices: $.ASN1Encoder<CertificateChoices> | null = null;


/**
 * @summary Encodes a(n) CertificateChoices into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoices, encoded as an ASN.1 Element.
 */
export function _encode_CertificateChoices(
    value: CertificateChoices,
    elGetter: $.ASN1Encoder<CertificateChoices>
): _Element {
    if (!_cached_encoder_for_CertificateChoices) {
        _cached_encoder_for_CertificateChoices = $._encode_choice<CertificateChoices>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.BER
                ),
                attrCert: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeCertificate,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}


/* eslint-enable */
