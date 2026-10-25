/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_cusf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-Operations OBJECT IDENTIFIER ::= {modules in-scf-cusf-ops-args(26) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_cusf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-cusf-ops-args */ 26,
    /* version1 */ 0,
], modules);

/* eslint-enable */
