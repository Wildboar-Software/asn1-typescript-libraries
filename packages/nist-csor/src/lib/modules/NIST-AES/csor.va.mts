/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary csor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * csor OBJECT IDENTIFIER ::= { 
 *    joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101) 3 }
 * ```
 * 
 * @constant
 */
export
const csor: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    3,
]);

/* eslint-enable */
