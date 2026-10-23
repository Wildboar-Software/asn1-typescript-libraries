/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary ssf_scf_classes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssf-scf-classes OBJECT IDENTIFIER ::= {modules in-ssf-scf-classes(7) version1(0)}
 * ```
 * 
 * @constant
 */
export
const ssf_scf_classes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-ssf-scf-classes */ 7,
    /* version1 */ 0,
], modules);

/* eslint-enable */
