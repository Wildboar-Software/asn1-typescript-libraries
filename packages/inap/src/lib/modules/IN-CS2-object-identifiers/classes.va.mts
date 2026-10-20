/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary classes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classes OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-classes(4) version1(0)}
 * ```
 * 
 * @constant
 */
export
const classes: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1228,
    /* modules */ 0,
    /* in-cs2-classes */ 4,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
