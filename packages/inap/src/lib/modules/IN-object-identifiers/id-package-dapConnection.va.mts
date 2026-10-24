/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_dapConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-dapConnection OBJECT IDENTIFIER ::= {id-package dapConnection(10)}
 * ```
 * 
 * @constant
 */
export
const id_package_dapConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dapConnection */ 10,
], id_package);

/* eslint-enable */
