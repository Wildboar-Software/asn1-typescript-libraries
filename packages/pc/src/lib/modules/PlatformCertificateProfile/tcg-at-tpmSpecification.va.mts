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
 * @summary tcg_at_tpmSpecification
 * @description
 *
 * TPM specification attribute (`{ tcg-attribute 16 }`). Assigned
 * in §4. This profile does not define its syntax; §3.2.10 lists a
 * related "TCPA Specification Version" compatibility attribute
 * that SHOULD NOT be included in Platform Certificates issued
 * under this profile. TCG Platform Certificate Profile v1.1 r19
 * §3.2.10, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmSpecification OBJECT IDENTIFIER ::= {tcg-attribute 16}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], tcg_attribute);

/* eslint-enable */
