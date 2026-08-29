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
import { tcg_attribute } from "../PlatformCertificateProfile/tcg-attribute.va.mjs";
/**
 * @summary tcg_at_tbbSecurityTarget
 * @description
 *
 * TBB Common Criteria security-target identifier
 * (`{ tcg-attribute 14 }`). For the RTM and how the TPM and RTM
 * were incorporated into the platform. This profile says SHOULD
 * NOT include it in new Platform Certificates. TCG Platform
 * Certificate Profile v1.1 r19 §3.2.10, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tbbSecurityTarget OBJECT IDENTIFIER ::= {tcg-attribute 14}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tbbSecurityTarget: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], tcg_attribute);

/* eslint-enable */
