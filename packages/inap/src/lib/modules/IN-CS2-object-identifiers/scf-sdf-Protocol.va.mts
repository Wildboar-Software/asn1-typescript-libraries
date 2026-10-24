/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary scf_sdf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-Protocol OBJECT IDENTIFIER ::= {itu-t recommendation q 1218 modules(0) in-scf-sdf-protocol(12) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1218,
    /* modules */ 0,
    /* in-scf-sdf-protocol */ 12,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
