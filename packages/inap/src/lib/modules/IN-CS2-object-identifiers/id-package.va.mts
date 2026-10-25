/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";
// export { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";


/**
 * @summary id_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package OBJECT IDENTIFIER ::= {id-cs2 package(27)}
 * ```
 * 
 * @constant
 */
export
const id_package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* package */ 27,
], id_cs2);

/* eslint-enable */
