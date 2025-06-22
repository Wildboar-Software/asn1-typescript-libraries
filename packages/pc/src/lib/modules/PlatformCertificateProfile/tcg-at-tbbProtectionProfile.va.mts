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
 * @summary tcg_at_tbbProtectionProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tbbProtectionProfile OBJECT IDENTIFIER ::= {tcg-attribute 13}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tbbProtectionProfile: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], tcg_attribute);

/* eslint-enable */
