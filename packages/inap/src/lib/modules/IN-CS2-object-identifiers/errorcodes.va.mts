/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary errorcodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errorcodes OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-errorcodes(3) version1(0)}
 * ```
 * 
 * @constant
 */
export
const errorcodes: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-errorcodes */ 3,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
