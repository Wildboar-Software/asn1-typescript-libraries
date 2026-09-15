/* eslint-disable */
import {
    iso,
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
 * @summary mMSNamedVariable
 * @description
 * 
 * OID root for Standardized Named
 * Variable definitions: { iso standard 9506 part(1) symbols-version1(5)
 * named-variable(1) }. ISO 9506-1:2003 §25.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mMSNamedVariable OBJECT IDENTIFIER ::= { iso standard 9506 part(1) symbols-version1(5) named-variable(1) }
 * ```
 * 
 * @constant
 */
export
const mMSNamedVariable: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* standard */,
    9506,
    /* part */ 1,
    /* symbols-version1 */ 5,
    /* named-variable */ 1,
], iso);

/* eslint-enable */
