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
} from "asn1-ts";
import { tcg_registry } from "../PlatformCertificateProfile/tcg-registry.va.mjs";
/**
 * @summary tcg_registry_componentClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-registry-componentClass OBJECT IDENTIFIER ::= {tcg-registry 3}
 * ```
 * 
 * @constant
 */
export
const tcg_registry_componentClass: OBJECT_IDENTIFIER = new _OID([
    3,
], tcg_registry);

/* eslint-enable */
