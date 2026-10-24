/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package OBJECT IDENTIFIER ::= {id-cs3 package(27)}
 * ```
 * 
 * @constant
 */
export
const id_package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* package */ 27,
], id_cs3);

/* eslint-enable */
