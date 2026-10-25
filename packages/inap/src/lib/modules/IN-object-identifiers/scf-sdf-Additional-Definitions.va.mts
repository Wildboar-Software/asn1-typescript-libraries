/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary scf_sdf_Additional_Definitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scf-sdf-Additional-Definitions OBJECT IDENTIFIER ::= {modules in-scf-sdf-additional-definitions(28) version1(0)}
 * ```
 * 
 * @constant
 */
export
const scf_sdf_Additional_Definitions: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-scf-sdf-additional-definitions */ 28,
    /* version1 */ 0,
], modules);

/* eslint-enable */
