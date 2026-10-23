/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary scf_srf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-srf-Operations OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-scf-srf-ops-args(7)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_srf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-scf-srf-ops-args */ 7,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
