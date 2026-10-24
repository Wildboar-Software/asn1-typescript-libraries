/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_srf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-srf-Protocol OBJECT IDENTIFIER ::= {modules in-scf-srf-pkgs-contracts-acs(13) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_srf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-srf-pkgs-contracts-acs */ 13,
    /* version1 */ 0,
], modules);

/* eslint-enable */
