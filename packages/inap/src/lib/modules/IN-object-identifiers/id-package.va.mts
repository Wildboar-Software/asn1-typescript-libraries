/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package OBJECT IDENTIFIER ::= {id package(27)}
 * ```
 * 
 * @constant
 */
export
const id_package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* package */ 27,
], id);

/* eslint-enable */
