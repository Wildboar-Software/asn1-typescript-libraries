/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "@wildboar/pki-stub";
import { type Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/pki-stub";


/**
 * @summary EimConfigurationData_trustedPublicKeyDataTls
 * @description
 * 
 * Trust material for TLS or DTLS toward this eIM (SGP.32 v1.2, section
 * 2.11.1.1). An IPAd may ignore the choice. Supply it on addEim when
 * eUICCInfo2.ipaMode is ipae and eimSupportedProtocol has eimRetrieveHttps or
 * eimRetrieveCoaps set, so an IPAe can complete eIM Package retrieval over
 * TLS or DTLS.
 *
 * trustedEimPkTls is the eIM public key, X.509 encoded. trustedCertificateTls
 * is a certificate in the chain that ends at the eIM leaf: the eIM
 * certificate, a root CA, or an intermediate CA. It contains
 * SubjectKeyIdentifier. A root or intermediate CA certificate includes
 * BasicConstraints with cA set to TRUE.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimConfigurationData-trustedPublicKeyDataTls ::= CHOICE {
 *     trustedEimPkTls SubjectPublicKeyInfo, -- public key of eIM, used for TLS or DTLS, where the encoding follows X.509 standard
 *     trustedCertificateTls Certificate -- either the certificate of eIM, used for (D)TLS, or the certificate of the CA, where the encoding follows X.509 standard
 * }
 * ```
 */
export
type EimConfigurationData_trustedPublicKeyDataTls =
    { trustedEimPkTls: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | { trustedCertificateTls: Certificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimConfigurationData_trustedPublicKeyDataTls: $.ASN1Decoder<EimConfigurationData_trustedPublicKeyDataTls> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimConfigurationData_trustedPublicKeyDataTls
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimConfigurationData_trustedPublicKeyDataTls (el: _Element): EimConfigurationData_trustedPublicKeyDataTls {
    if (!_cached_decoder_for_EimConfigurationData_trustedPublicKeyDataTls) { _cached_decoder_for_EimConfigurationData_trustedPublicKeyDataTls = $._decode_inextensible_choice<EimConfigurationData_trustedPublicKeyDataTls>({
    "CONTEXT 0": [ "trustedEimPkTls", _decode_SubjectPublicKeyInfo ],
    "CONTEXT 1": [ "trustedCertificateTls", _decode_Certificate ]
}); }
    return _cached_decoder_for_EimConfigurationData_trustedPublicKeyDataTls(el);
}

let _cached_encoder_for_EimConfigurationData_trustedPublicKeyDataTls: $.ASN1Encoder<EimConfigurationData_trustedPublicKeyDataTls> | null = null;

/**
 * @summary Encodes a(n) EimConfigurationData_trustedPublicKeyDataTls into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimConfigurationData_trustedPublicKeyDataTls, encoded as an ASN.1 Element.
 */
export
function _encode_EimConfigurationData_trustedPublicKeyDataTls (value: EimConfigurationData_trustedPublicKeyDataTls, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimConfigurationData_trustedPublicKeyDataTls) { _cached_encoder_for_EimConfigurationData_trustedPublicKeyDataTls = $._encode_choice<EimConfigurationData_trustedPublicKeyDataTls>({
    "trustedEimPkTls": _encode_SubjectPublicKeyInfo,
    "trustedCertificateTls": _encode_Certificate,
}, $.BER); }
    return _cached_encoder_for_EimConfigurationData_trustedPublicKeyDataTls(value, elGetter);
}


/* eslint-enable */
