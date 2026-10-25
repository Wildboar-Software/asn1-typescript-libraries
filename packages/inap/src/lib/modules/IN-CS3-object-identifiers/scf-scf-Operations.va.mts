/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";


/**
 * @summary scf_scf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-scf-Operations OBJECT IDENTIFIER ::= {modules in-cs3-scf-scf-ops-args(22) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_scf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-cs3-scf-scf-ops-args */ 22,
    /* version1 */ 0,
], modules);

/* eslint-enable */
