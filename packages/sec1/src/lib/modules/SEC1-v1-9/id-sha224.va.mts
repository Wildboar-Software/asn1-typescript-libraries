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
import { id_sha } from "../SEC1-v1-9/id-sha.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_sha224 */
/**
 * @summary id_sha224
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha224 OBJECT IDENTIFIER ::= { id-sha 4 }
 * ```
 * 
 * @constant
 */
export
const id_sha224: OBJECT_IDENTIFIER = new _OID([
    4,
], id_sha);
/* END_OF_SYMBOL_DEFINITION id_sha224 */

/* eslint-enable */
