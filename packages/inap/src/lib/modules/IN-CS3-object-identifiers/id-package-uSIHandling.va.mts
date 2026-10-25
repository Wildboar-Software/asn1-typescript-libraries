/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_uSIHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-uSIHandling OBJECT IDENTIFIER ::= {id-package uSIHandling(40)}
 * ```
 * 
 * @constant
 */
export
const id_package_uSIHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    /* uSIHandling */ 40,
], id_package);

/* eslint-enable */
