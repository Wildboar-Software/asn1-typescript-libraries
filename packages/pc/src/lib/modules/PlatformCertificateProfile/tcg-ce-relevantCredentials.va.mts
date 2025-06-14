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
import { tcg_ce } from "../PlatformCertificateProfile/tcg-ce.va.mjs";
/* START_OF_SYMBOL_DEFINITION tcg_ce_relevantCredentials */
/**
 * @summary tcg_ce_relevantCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-ce-relevantCredentials OBJECT IDENTIFIER ::= {tcg-ce 2}
 * ```
 * 
 * @constant
 */
export
const tcg_ce_relevantCredentials: OBJECT_IDENTIFIER = new _OID([
    2,
], tcg_ce);
/* END_OF_SYMBOL_DEFINITION tcg_ce_relevantCredentials */

/* eslint-enable */
