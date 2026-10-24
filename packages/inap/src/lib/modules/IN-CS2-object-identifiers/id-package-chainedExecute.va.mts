/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_chainedExecute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-chainedExecute OBJECT IDENTIFIER ::= {id-package 50}
 * ```
 * 
 * @constant
 */
export
const id_package_chainedExecute: OBJECT_IDENTIFIER = _OID.fromParts([
    50,
], id_package);

/* eslint-enable */
