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
 * @summary mMSAccessControlList
 * @description
 * 
 * OID root for Standardized Access
 * Control List definitions: { iso standard 9506 part(1)
 * symbols-version1(5) access-control-list(2) }. ISO 9506-1:2003 §25.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mMSAccessControlList OBJECT IDENTIFIER ::= { iso standard 9506 part(1) symbols-version1(5) access-control-list(2) }
 * ```
 * 
 * @constant
 */
export
const mMSAccessControlList: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* standard */,
    9506,
    /* part */ 1,
    /* symbols-version1 */ 5,
    /* access-control-list */ 2,
], iso);

/* eslint-enable */
