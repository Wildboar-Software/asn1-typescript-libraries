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
 * @summary tcg_at_tcgCredentialType
 * @description
 *
 * Certificate-type attribute (`{ tcg-attribute 25 }`). Distinguishes
 * Platform vs Delta attribute certificates. SHOULD appear in a
 * Platform Certificate. MUST appear in a Delta. TCG Platform
 * Certificate Profile v1.1 r19 §3.1.4, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialType OBJECT IDENTIFIER ::= {tcg-attribute 25}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialType: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], tcg_attribute);

/* eslint-enable */
