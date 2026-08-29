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
 * @summary tcg_at_tcgCredentialSpecification
 * @description
 *
 * Certificate-profile version attribute (`{ tcg-attribute 23 }`).
 * Major, minor, and revision of this specification. SHOULD appear
 * in a Platform Certificate. MAY appear in a Delta if the spec
 * version differs from the base. TCG Platform Certificate
 * Profile v1.1 r19 §3.1.5, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tcgCredentialSpecification OBJECT IDENTIFIER ::= {tcg-attribute 23}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tcgCredentialSpecification: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], tcg_attribute);

/* eslint-enable */
