/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary euroDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroDir OBJECT IDENTIFIER ::= { iso(1) identified-organisation(3) ewos(16) eg(2) dir(1) }
 * ```
 * 
 * @constant
 */
export
const euroDir: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organisation */ 3,
    /* ewos */ 16,
    /* eg */ 2,
    /* dir */ 1,
]);

/* eslint-enable */
