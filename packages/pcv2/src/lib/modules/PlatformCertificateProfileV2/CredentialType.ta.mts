/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CredentialType
 * @description
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

export
const _decode_CredentialType: $.ASN1Decoder<CredentialType> = $._decodeObjectIdentifier;

export
const _encode_CredentialType: $.ASN1Encoder<CredentialType> = $._encodeObjectIdentifier;

/* eslint-enable */
