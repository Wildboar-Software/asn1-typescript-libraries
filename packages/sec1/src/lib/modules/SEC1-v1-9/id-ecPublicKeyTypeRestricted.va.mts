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
/**
 * @summary id_ecPublicKeyTypeRestricted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ecPublicKeyTypeRestricted OBJECT IDENTIFIER ::= {
 *     id-publicKeyType restricted(2)
 * }
 * ```
 * 
 * @constant
 */
export
const id_ecPublicKeyTypeRestricted: OBJECT_IDENTIFIER = new _OID([
    /* restricted */ 2,
], id_publicKeyType);

/* eslint-enable */
