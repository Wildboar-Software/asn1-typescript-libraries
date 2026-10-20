/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";


/**
 * @summary ssf_scf_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scf-datatypes OBJECT IDENTIFIER ::= {modules in-cs3-ssf-scf-datatypes(6) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ssf_scf_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-cs3-ssf-scf-datatypes */ 6,
    /* version1 */ 0,
], modules);

/* eslint-enable */
