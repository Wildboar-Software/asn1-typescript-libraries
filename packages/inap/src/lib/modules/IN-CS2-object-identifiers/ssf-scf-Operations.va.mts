/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ssf_scf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scf-Operations OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-ssf-scf-ops-args(5)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const ssf_scf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1228,
    /* modules */ 0,
    /* in-cs2-ssf-scf-ops-args */ 5,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
