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
import { ansi_X9_62 } from "../SEC1-v1-9/ansi-X9-62.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_publicKeyType */
/**
 * @summary id_publicKeyType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-publicKeyType OBJECT IDENTIFIER ::= { ansi-X9-62 keyType(2) }
 * ```
 * 
 * @constant
 */
export
const id_publicKeyType: OBJECT_IDENTIFIER = new _OID([
    /* keyType */ 2,
], ansi_X9_62);
/* END_OF_SYMBOL_DEFINITION id_publicKeyType */

/* eslint-enable */
