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
/**
 * @summary id_ecPublicKeyTypeSupplemented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ecPublicKeyTypeSupplemented OBJECT IDENTIFIER ::= { secg-scheme
 *     supplementalPoints(0) }
 * ```
 * 
 * @constant
 */
export
const id_ecPublicKeyTypeSupplemented: OBJECT_IDENTIFIER = new _OID([
    /* supplementalPoints */ 0,
], secg_scheme);

/* eslint-enable */
