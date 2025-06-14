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
/* START_OF_SYMBOL_DEFINITION aes128_key_wrap */
/**
 * @summary aes128_key_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aes128-key-wrap OBJECT IDENTIFIER ::= {secg-scheme 25 0 }
 * ```
 * 
 * @constant
 */
export
const aes128_key_wrap: OBJECT_IDENTIFIER = new _OID([
    25,
    0,
], secg_scheme);
/* END_OF_SYMBOL_DEFINITION aes128_key_wrap */

/* eslint-enable */
