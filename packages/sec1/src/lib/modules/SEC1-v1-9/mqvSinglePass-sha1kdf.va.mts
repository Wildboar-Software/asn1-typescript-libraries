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
import { x9_63_scheme } from "../SEC1-v1-9/x9-63-scheme.va.mjs";
/* START_OF_SYMBOL_DEFINITION mqvSinglePass_sha1kdf */
/**
 * @summary mqvSinglePass_sha1kdf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mqvSinglePass-sha1kdf OBJECT IDENTIFIER ::= {x9-63-scheme 16}
 * ```
 * 
 * @constant
 */
export
const mqvSinglePass_sha1kdf: OBJECT_IDENTIFIER = new _OID([
    16,
], x9_63_scheme);
/* END_OF_SYMBOL_DEFINITION mqvSinglePass_sha1kdf */

/* eslint-enable */
