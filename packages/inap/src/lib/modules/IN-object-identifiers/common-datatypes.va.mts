/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary common_datatypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * common-datatypes OBJECT IDENTIFIER ::= {modules in-common-datatypes(1) version1(0)}
 * ```
 * 
 * @constant
 */
export
const common_datatypes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-common-datatypes */ 1,
    /* version1 */ 0,
], modules);

/* eslint-enable */
