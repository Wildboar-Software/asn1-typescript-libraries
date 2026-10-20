/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary contexts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contexts OBJECT IDENTIFIER ::= {itu-t recommendation q 1218 modules(0) contexts(8) selectedContexts(1)
 *    version(1)}
 * ```
 * 
 * @constant
 */
export
const contexts: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1218,
    /* modules */ 0,
    /* contexts */ 8,
    /* selectedContexts */ 1,
    /* version */ 1,
], itu_t);

/* eslint-enable */
