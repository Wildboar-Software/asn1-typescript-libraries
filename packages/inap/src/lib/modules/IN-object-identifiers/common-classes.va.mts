/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { modules } from "../IN-object-identifiers/modules.va.mjs";
// export { modules } from "../IN-object-identifiers/modules.va.mjs";


/**
 * @summary common_classes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * common-classes OBJECT IDENTIFIER ::= {modules in-common-classes(5) version1(0)}
 * ```
 * 
 * @constant
 */
export
const common_classes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* in-common-classes */ 5,
    /* version1 */ 0,
], modules);

/* eslint-enable */
