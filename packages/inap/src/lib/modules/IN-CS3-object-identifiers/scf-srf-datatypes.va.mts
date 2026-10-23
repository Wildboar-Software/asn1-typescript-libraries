/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";


/**
 * @summary scf_srf_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-srf-datatypes OBJECT IDENTIFIER ::= {modules in-cs3-scf-srf-datatypes(10) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_srf_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-cs3-scf-srf-datatypes */ 10,
    /* version1 */ 0,
], modules);

/* eslint-enable */
