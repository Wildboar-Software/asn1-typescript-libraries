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
 * @summary tcg_registry_componentClass_tcg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass-tcg OBJECT IDENTIFIER ::= {tcg-registry-componentClass 1}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass_tcg: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], tcg_registry_componentClass);

/* eslint-enable */
