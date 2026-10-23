/* eslint-disable */
import {
    ASN1Error,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_kp_AdditionalPlatformAttributeCertificate } from "../PlatformCertificateProfileV2/tcg-kp-AdditionalPlatformAttributeCertificate.va.mjs";
import { tcg_kp_AdditionalPlatformKeyCertificate } from "../PlatformCertificateProfileV2/tcg-kp-AdditionalPlatformKeyCertificate.va.mjs";
import { tcg_kp_DeltaPlatformAttributeCertificate } from "../PlatformCertificateProfileV2/tcg-kp-DeltaPlatformAttributeCertificate.va.mjs";
import { tcg_kp_DeltaPlatformKeyCertificate } from "../PlatformCertificateProfileV2/tcg-kp-DeltaPlatformKeyCertificate.va.mjs";
import { tcg_kp_PlatformAttributeCertificate } from "../PlatformCertificateProfileV2/tcg-kp-PlatformAttributeCertificate.va.mjs";
import { tcg_kp_PlatformKeyCertificate } from "../PlatformCertificateProfileV2/tcg-kp-PlatformKeyCertificate.va.mjs";



/**
 * @summary CredentialType
 * @description
 *
 * Which platform certificate this is.
 *
 * A certificate that does not reference another uses
 * `tcg-kp-PlatformAttributeCertificate` when it is an attribute certificate and
 * `tcg-kp-PlatformKeyCertificate` when it is a public-key certificate.
 *
 * A certificate that references another uses
 * `tcg-kp-AdditionalPlatformAttributeCertificate` or
 * `tcg-kp-AdditionalPlatformKeyCertificate` for those same encodings.
 *
 * A delta certificate uses `tcg-kp-DeltaPlatformAttributeCertificate` or
 * `tcg-kp-DeltaPlatformKeyCertificate`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CredentialType  ::=  OBJECT IDENTIFIER (
 *     tcg-kp-PlatformAttributeCertificate
 *     | tcg-kp-PlatformKeyCertificate
 *     | tcg-kp-AdditionalPlatformAttributeCertificate
 *     | tcg-kp-AdditionalPlatformKeyCertificate
 *     | tcg-kp-DeltaPlatformAttributeCertificate
 *     | tcg-kp-DeltaPlatformKeyCertificate
 * )
 * ```
 */
export
type CredentialType = OBJECT_IDENTIFIER; // ObjectIdentifierType

const _permitted_credential_types: OBJECT_IDENTIFIER[] = [
    tcg_kp_PlatformAttributeCertificate,
    tcg_kp_PlatformKeyCertificate,
    tcg_kp_AdditionalPlatformAttributeCertificate,
    tcg_kp_AdditionalPlatformKeyCertificate,
    tcg_kp_DeltaPlatformAttributeCertificate,
    tcg_kp_DeltaPlatformKeyCertificate,
];

export
const _decode_CredentialType: $.ASN1Decoder<CredentialType> = (el) => {
    const value = $._decodeObjectIdentifier(el);
    if (!_permitted_credential_types.some((oid) => oid.isEqualTo(value))) {
        throw new ASN1Error("CredentialType is not a permitted object identifier");
    }
    return value;
};

export
const _encode_CredentialType: $.ASN1Encoder<CredentialType> = $._encodeObjectIdentifier;

/* eslint-enable */
