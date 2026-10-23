/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_triggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-triggerManagement OBJECT IDENTIFIER ::= {id-package 39}
 * ```
 * 
 * @constant
 */
export
const id_package_triggerManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    39,
], id_package);

/* eslint-enable */
