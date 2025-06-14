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
/* START_OF_SYMBOL_DEFINITION mqvSinglePass_sha384kdf_scheme */
/**
 * @summary mqvSinglePass_sha384kdf_scheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvSinglePass-sha384kdf-scheme OBJECT IDENTIFIER ::= {secg-scheme 15 2}
 * ```
 * 
 * @constant
 */
export
const mqvSinglePass_sha384kdf_scheme: OBJECT_IDENTIFIER = new _OID([
    15,
    2,
], secg_scheme);
/* END_OF_SYMBOL_DEFINITION mqvSinglePass_sha384kdf_scheme */

/* eslint-enable */
