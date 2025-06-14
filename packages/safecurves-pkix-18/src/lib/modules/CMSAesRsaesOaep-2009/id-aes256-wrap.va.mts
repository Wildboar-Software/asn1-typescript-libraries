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
import { aes } from "../CMSAesRsaesOaep-2009/aes.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_aes256_wrap */
/**
 * @summary id_aes256_wrap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aes256-wrap OBJECT IDENTIFIER ::= { aes 45 }
 * ```
 * 
 * @constant
 */
export
const id_aes256_wrap: OBJECT_IDENTIFIER = new _OID([
    45,
], aes);
/* END_OF_SYMBOL_DEFINITION id_aes256_wrap */

/* eslint-enable */
