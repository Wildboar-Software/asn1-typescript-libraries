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
/**
 * @summary ecdsa_with_Sha512
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecdsa-with-Sha512 OBJECT IDENTIFIER ::= { id-ecSigType specified(3) 4 }
 * ```
 * 
 * @constant
 */
export
const ecdsa_with_Sha512: OBJECT_IDENTIFIER = new _OID([
    /* specified */ 3,
    4,
], id_ecSigType);

/* eslint-enable */
