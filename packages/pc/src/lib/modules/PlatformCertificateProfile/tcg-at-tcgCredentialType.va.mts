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
import { tcg_attribute } from "../PlatformCertificateProfile/tcg-attribute.va.mjs";
/**
 * @summary tcg_at_tcgCredentialType
 * @description
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
const tcg_at_tcgCredentialType: OBJECT_IDENTIFIER = new _OID([
    25,
], tcg_attribute);

/* eslint-enable */
