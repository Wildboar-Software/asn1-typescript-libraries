/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary scf_srf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-srf-Protocol OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0) in-cs2-scf-srf-pkgs-contracts-acs(8)
 *    version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_srf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    recommendation,
    q,
    1228,
    /* modules */ 0,
    /* in-cs2-scf-srf-pkgs-contracts-acs */ 8,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
