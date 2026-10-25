/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary object_identifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * object-identifiers OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-object-identifiers(17)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const object_identifiers: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-object-identifiers */ 17,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
