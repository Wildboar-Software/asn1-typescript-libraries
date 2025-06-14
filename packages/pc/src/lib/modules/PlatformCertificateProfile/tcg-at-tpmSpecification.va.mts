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
/* START_OF_SYMBOL_DEFINITION tcg_at_tpmSpecification */
/**
 * @summary tcg_at_tpmSpecification
 * @description
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
const tcg_at_tpmSpecification: OBJECT_IDENTIFIER = new _OID([
    16,
], tcg_attribute);
/* END_OF_SYMBOL_DEFINITION tcg_at_tpmSpecification */

/* eslint-enable */
