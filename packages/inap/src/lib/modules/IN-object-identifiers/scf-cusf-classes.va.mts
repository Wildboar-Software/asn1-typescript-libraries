/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_cusf_classes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-cusf-classes OBJECT IDENTIFIER ::= {modules in-scf-cusf-classes(25) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_cusf_classes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-cusf-classes */ 25,
    /* version1 */ 0,
], modules);

/* eslint-enable */
