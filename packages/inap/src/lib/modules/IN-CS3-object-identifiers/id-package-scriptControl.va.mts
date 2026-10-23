/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_scriptControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-scriptControl OBJECT IDENTIFIER ::= {id-package scriptControl(45)}
 * ```
 * 
 * @constant
 */
export
const id_package_scriptControl: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scriptControl */ 45,
], id_package);

/* eslint-enable */
