/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_sdf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-Operations OBJECT IDENTIFIER ::= {modules in-scf-sdf-ops-args(16) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-sdf-ops-args */ 16,
    /* version1 */ 0,
], modules);

/* eslint-enable */
