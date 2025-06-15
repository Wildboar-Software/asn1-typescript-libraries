/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs';
import {
    AttributeCertificateV2,
    _decode_AttributeCertificateV2,
    _encode_AttributeCertificateV2,
} from '../AuthenticationContextForBiometrics/AttributeCertificateV2.ta.mjs';
import {
    OtherCertificateFormat,
    _decode_OtherCertificateFormat,
    _encode_OtherCertificateFormat,
} from '../AuthenticationContextForBiometrics/OtherCertificateFormat.ta.mjs';

/**
 * @summary CertificateChoices
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateChoices  ::=  CHOICE {
 *     certificate     Certificate,
 *     v2AttrCert      [2] IMPLICIT AttributeCertificateV2,
 *     other           [3] IMPLICIT OtherCertificateFormat }
 * ```
 */
export type CertificateChoices =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { v2AttrCert: AttributeCertificateV2 } /* CHOICE_ALT_ROOT */
    | { other: OtherCertificateFormat } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CertificateChoices: $.ASN1Decoder<CertificateChoices> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoices
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateChoices} The decoded data structure.
 */
export function _decode_CertificateChoices(el: _Element) {
    if (!_cached_decoder_for_CertificateChoices) {
        _cached_decoder_for_CertificateChoices = $._decode_inextensible_choice<CertificateChoices>(
            {
                'UNIVERSAL 16': ['certificate', _decode_Certificate],
                'CONTEXT 2': [
                    'v2AttrCert',
                    $._decode_implicit<AttributeCertificateV2>(
                        () => _decode_AttributeCertificateV2
                    ),
                ],
                'CONTEXT 3': [
                    'other',
                    $._decode_implicit<OtherCertificateFormat>(
                        () => _decode_OtherCertificateFormat
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
) {
    if (!_cached_encoder_for_CertificateChoices) {
        _cached_encoder_for_CertificateChoices = $._encode_choice<CertificateChoices>(
            {
                certificate: _encode_Certificate,
                v2AttrCert: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeCertificateV2,
                    $.BER
                ),
                other: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_OtherCertificateFormat,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}


/* eslint-enable */
