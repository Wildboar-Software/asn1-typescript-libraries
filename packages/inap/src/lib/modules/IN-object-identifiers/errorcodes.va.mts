/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary errorcodes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * errorcodes OBJECT IDENTIFIER ::= {modules in-errorcodes(4) version1(0)}
 * ```
 * 
 * @constant
 */
export
const errorcodes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-errorcodes */ 4,
    /* version1 */ 0,
], modules);

/* eslint-enable */
