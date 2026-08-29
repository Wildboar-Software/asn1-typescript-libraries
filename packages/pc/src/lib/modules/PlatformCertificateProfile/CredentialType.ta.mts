/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CredentialType
 * @description
 *
 * TCG key-purpose OID identifying the certificate as a Platform
 * Attribute Certificate or a Delta Platform Attribute Certificate.
 * TCG Platform Certificate Profile v1.1 r19 §3.1.4, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CredentialType  ::=  OBJECT IDENTIFIER (
 *     tcg-kp-PlatformAttributeCertificate
 *     | tcg-kp-DeltaPlatformAttributeCertificate )
 * ```
 */
export
type CredentialType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_CredentialType = $._decodeObjectIdentifier;


export const _encode_CredentialType = $._encodeObjectIdentifier;


/* eslint-enable */
