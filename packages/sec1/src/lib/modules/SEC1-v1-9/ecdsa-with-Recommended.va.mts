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
} from "@wildboar/asn1";
import { id_ecSigType } from "../SEC1-v1-9/id-ecSigType.va.mjs";
/**
 * @summary ecdsa_with_Recommended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecdsa-with-Recommended OBJECT IDENTIFIER ::= { id-ecSigType recommended(2) }
 * ```
 * 
 * @constant
 */
export
const ecdsa_with_Recommended: OBJECT_IDENTIFIER = _OID.fromParts([
    /* recommended */ 2,
], id_ecSigType);

/* eslint-enable */
