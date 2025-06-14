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
import { secg_scheme } from "../SEC1-v1-9/secg-scheme.va.mjs";
/* START_OF_SYMBOL_DEFINITION mqvFull_specifiedKDF */
/**
 * @summary mqvFull_specifiedKDF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvFull-specifiedKDF OBJECT IDENTIFIER ::= {secg-scheme 6}
 * ```
 * 
 * @constant
 */
export
const mqvFull_specifiedKDF: OBJECT_IDENTIFIER = new _OID([
    6,
], secg_scheme);
/* END_OF_SYMBOL_DEFINITION mqvFull_specifiedKDF */

/* eslint-enable */
