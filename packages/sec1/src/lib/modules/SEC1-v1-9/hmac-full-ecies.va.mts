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
/* START_OF_SYMBOL_DEFINITION hmac_full_ecies */
/**
 * @summary hmac_full_ecies
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hmac-full-ecies OBJECT IDENTIFIER ::= {secg-scheme 22 }
 * ```
 * 
 * @constant
 */
export
const hmac_full_ecies: OBJECT_IDENTIFIER = new _OID([
    22,
], secg_scheme);
/* END_OF_SYMBOL_DEFINITION hmac_full_ecies */

/* eslint-enable */
