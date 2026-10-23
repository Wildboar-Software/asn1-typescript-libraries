/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * datatypes OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-datatypes(0) version1(0)}
 * ```
 * 
 * @constant
 */
export
const datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-datatypes */ 0,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
