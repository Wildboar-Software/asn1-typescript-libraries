/* eslint-disable */
import {
    joint_iso_itu_t,
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



/**
 * @summary dorx
 * @description
 *
 * DOR module OID arc (ISO/IEC 10031-2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dorx OBJECT IDENTIFIER ::= {joint-iso-itu-t dor(11)}
 * ```
 * 
 * @constant
 */
export
const dorx: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dor */ 11,
], joint_iso_itu_t);

/* eslint-enable */
