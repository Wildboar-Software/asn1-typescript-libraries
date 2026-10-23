/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_sdf_classes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-classes OBJECT IDENTIFIER ::= {modules in-scf-sdf-classes(15) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_classes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-sdf-classes */ 15,
    /* version1 */ 0,
], modules);

/* eslint-enable */
