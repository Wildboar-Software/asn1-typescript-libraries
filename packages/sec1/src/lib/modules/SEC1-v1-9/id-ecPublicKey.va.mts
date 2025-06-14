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
import { id_publicKeyType } from "../SEC1-v1-9/id-publicKeyType.va.mjs";
/* START_OF_SYMBOL_DEFINITION id_ecPublicKey */
/**
 * @summary id_ecPublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= { id-publicKeyType 1 }
 * ```
 * 
 * @constant
 */
export
const id_ecPublicKey: OBJECT_IDENTIFIER = new _OID([
    1,
], id_publicKeyType);
/* END_OF_SYMBOL_DEFINITION id_ecPublicKey */

/* eslint-enable */
