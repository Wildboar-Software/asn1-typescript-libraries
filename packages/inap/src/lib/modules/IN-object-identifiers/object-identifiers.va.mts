/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary object_identifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * object-identifiers OBJECT IDENTIFIER ::= {modules in-object-identifiers(0) version1(0)}
 * ```
 * 
 * @constant
 */
export
const object_identifiers: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-object-identifiers */ 0,
    /* version1 */ 0,
], modules);

/* eslint-enable */
