/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_cusf_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-datatypes OBJECT IDENTIFIER ::= {modules in-scf-cusf-datatypes(24) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_cusf_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-cusf-datatypes */ 24,
    /* version1 */ 0,
], modules);

/* eslint-enable */
