/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary sdf_sdf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sdf-sdf-Protocol OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-sdf-sdf-Protocol(18)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const sdf_sdf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-sdf-sdf-Protocol */ 18,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
