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
import { tcg_kp } from "../PlatformCertificateProfile/tcg-kp.va.mjs";
/**
 * @summary tcg_kp_PlatformAttributeCertificate
 * @description
 *
 * Key purpose / credential type: Platform Certificate in
 * attribute-certificate format (`{ tcg-kp 2 }`). Used as
 * `CredentialType` and as `tCGCredentialType`. TCG Platform
 * Certificate Profile v1.1 r19 §3.1.4, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-kp-PlatformAttributeCertificate OBJECT IDENTIFIER ::= {tcg-kp 2}
 * ```
 * 
 * @constant
 */
export
const tcg_kp_PlatformAttributeCertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_kp);

/* eslint-enable */
