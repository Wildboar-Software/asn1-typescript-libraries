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
import { id_ecSigType } from "../SEC1-v1-9/id-ecSigType.va.mjs";
/* START_OF_SYMBOL_DEFINITION ecdsa_with_Sha384 */
/**
 * @summary ecdsa_with_Sha384
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecdsa-with-Sha384 OBJECT IDENTIFIER ::= { id-ecSigType specified(3) 3 }
 * ```
 * 
 * @constant
 */
export
const ecdsa_with_Sha384: OBJECT_IDENTIFIER = new _OID([
    /* specified */ 3,
    3,
], id_ecSigType);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Sha384 */

/* eslint-enable */
