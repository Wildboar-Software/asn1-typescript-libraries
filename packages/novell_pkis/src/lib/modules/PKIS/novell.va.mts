/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary novell
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * novell OBJECT IDENTIFIER ::= {joint-iso-ccitt(2) country(16) us(840) organization(1) novell (113719)}
 * ```
 * 
 * @constant
 */
export
const novell: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-ccitt */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* novell */ 113719,
]);

/* eslint-enable */
