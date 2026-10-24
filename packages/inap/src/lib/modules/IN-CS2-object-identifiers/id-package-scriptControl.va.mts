/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_scriptControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-scriptControl OBJECT IDENTIFIER ::= {id-package 45}
 * ```
 * 
 * @constant
 */
export
const id_package_scriptControl: OBJECT_IDENTIFIER = _OID.fromParts([
    45,
], id_package);

/* eslint-enable */
