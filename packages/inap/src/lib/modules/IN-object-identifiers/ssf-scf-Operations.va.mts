/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary ssf_scf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scf-Operations OBJECT IDENTIFIER ::= {modules in-ssf-scf-ops-args(8) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ssf_scf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-ssf-scf-ops-args */ 8,
    /* version1 */ 0,
], modules);

/* eslint-enable */
