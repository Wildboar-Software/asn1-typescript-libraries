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
/* START_OF_SYMBOL_DEFINITION tcg_at_tcgCredentialSpecification */
/**
 * @summary tcg_at_tcgCredentialSpecification
 * @description
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
const tcg_at_tcgCredentialSpecification: OBJECT_IDENTIFIER = new _OID([
    23,
], tcg_attribute);
/* END_OF_SYMBOL_DEFINITION tcg_at_tcgCredentialSpecification */

/* eslint-enable */
