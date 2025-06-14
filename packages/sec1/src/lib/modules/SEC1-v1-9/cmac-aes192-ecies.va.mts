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
/* START_OF_SYMBOL_DEFINITION cmac_aes192_ecies */
/**
 * @summary cmac_aes192_ecies
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmac-aes192-ecies OBJECT IDENTIFIER ::= {secg-scheme 24 1 }
 * ```
 * 
 * @constant
 */
export
const cmac_aes192_ecies: OBJECT_IDENTIFIER = new _OID([
    24,
    1,
], secg_scheme);
/* END_OF_SYMBOL_DEFINITION cmac_aes192_ecies */

/* eslint-enable */
