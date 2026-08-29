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
import { tcg_registry_componentClass } from "../PlatformCertificateProfile/tcg-registry-componentClass.va.mjs";
/**
 * @summary tcg_registry_componentClass_ietf
 * @description
 *
 * IETF component-class registry
 * (`{ tcg-registry-componentClass 2 }`). Refers to IETF RFC 8348
 * IANA Hardware Class. TCG Platform Certificate Profile v1.1 r19
 * §3.1.6, §4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-ietf OBJECT IDENTIFIER ::= {tcg-registry-componentClass 2}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_ietf: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg_registry_componentClass);

/* eslint-enable */
