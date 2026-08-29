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
 * @summary tcg_at_tpmVersion
 * @description
 *
 * TPM version attribute (`{ tcg-attribute 3 }`). Documented for
 * compatibility with earlier TCG/TCPA specifications; SHOULD NOT
 * be included in Platform Certificates issued under this profile.
 * TCG Platform Certificate Profile v1.1 r19 §3.2.10, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-at-tpmVersion OBJECT IDENTIFIER ::= {tcg-attribute 3}
 * ```
 * 
 * @constant
 */
export
const tcg_at_tpmVersion: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], tcg_attribute);

/* eslint-enable */
