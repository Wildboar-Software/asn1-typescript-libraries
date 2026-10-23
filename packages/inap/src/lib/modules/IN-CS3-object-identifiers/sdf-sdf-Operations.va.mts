/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";


/**
 * @summary sdf_sdf_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sdf-sdf-Operations OBJECT IDENTIFIER ::= {modules in-cs3-sdf-sdf-ops-args(18) version1(0)}
 * ```
 * 
 * @constant
 */
export
const sdf_sdf_Operations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-cs3-sdf-sdf-ops-args */ 18,
    /* version1 */ 0,
], modules);

/* eslint-enable */
