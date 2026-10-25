/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_scf_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-scf-datatypes OBJECT IDENTIFIER ::= {modules in-scf-scf-datatypes(20) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_scf_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-scf-datatypes */ 20,
    /* version1 */ 0,
], modules);

/* eslint-enable */
