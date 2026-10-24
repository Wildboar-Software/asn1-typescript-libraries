/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_cusf_Protocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-Protocol OBJECT IDENTIFIER ::= {modules in-scf-cusf-pkgs-contracts-acs(27) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_cusf_Protocol: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-cusf-pkgs-contracts-acs */ 27,
    /* version1 */ 0,
], modules);

/* eslint-enable */
