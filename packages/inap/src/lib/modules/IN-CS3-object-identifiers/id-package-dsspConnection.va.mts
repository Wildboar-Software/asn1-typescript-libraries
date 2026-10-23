/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_dsspConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-dsspConnection OBJECT IDENTIFIER ::= {id-package dsspConnection(74)}
 * ```
 * 
 * @constant
 */
export
const id_package_dsspConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dsspConnection */ 74,
], id_package);

/* eslint-enable */
