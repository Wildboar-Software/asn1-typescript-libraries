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
 * @summary mMSEventCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mMSEventCondition OBJECT IDENTIFIER ::= { iso standard 9506 part(1) symbols-version1(5) event-condition(3) }
 * ```
 * 
 * @constant
 */
export
const mMSEventCondition: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* standard */,
    9506,
    /* part */ 1,
    /* symbols-version1 */ 5,
    /* event-condition */ 3,
], iso);

/* eslint-enable */
