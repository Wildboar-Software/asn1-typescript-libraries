/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary scf_cusf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-Protocol OBJECT IDENTIFIER ::= {itu-t recommendation q 1228 modules(0)
 *    in-cs2-scf-cusf-pkgs-contracts-acs(16) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_cusf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    0 /* recommendation */,
    17 /* q */,
    1228,
    /* modules */ 0,
    /* in-cs2-scf-cusf-pkgs-contracts-acs */ 16,
    /* version1 */ 0,
], itu_t);

/* eslint-enable */
