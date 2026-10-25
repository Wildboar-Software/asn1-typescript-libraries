/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-CS3-object-identifiers/modules.va.mjs";


/**
 * @summary errortypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errortypes OBJECT IDENTIFIER ::= {modules in-cs3-errortypes(2) version1(0)}
 * ```
 * 
 * @constant
 */
export
const errortypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-cs3-errortypes */ 2,
    /* version1 */ 0,
], modules);

/* eslint-enable */
