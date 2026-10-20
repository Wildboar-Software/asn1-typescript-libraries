/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary errortypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errortypes OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-errortypes(1) version1(0)}
 * ```
 * 
 * @constant
 */
export
const errortypes: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1228,
    /* modules */ 0,
    /* in-cs2-errortypes */ 1,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
