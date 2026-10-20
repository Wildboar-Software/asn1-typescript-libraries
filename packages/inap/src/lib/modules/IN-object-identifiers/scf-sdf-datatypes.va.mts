/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_sdf_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-datatypes OBJECT IDENTIFIER ::= {modules in-scf-sdf-datatypes(14) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-sdf-datatypes */ 14,
    /* version1 */ 0,
], modules);

/* eslint-enable */
