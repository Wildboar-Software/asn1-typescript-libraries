/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary scf_sdf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-Operations OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) scf-sdf-operations(11) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1228,
    /* modules */ 0,
    /* scf-sdf-operations */ 11,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
