/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_dispConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-dispConnection OBJECT IDENTIFIER ::= {id-package dispConnection(51)}
 * ```
 * 
 * @constant
 */
export
const id_package_dispConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dispConnection */ 51,
], id_package);

/* eslint-enable */
