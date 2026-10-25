/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_triggerCallManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-triggerCallManagement OBJECT IDENTIFIER ::= {id-package triggerCallManagement(63)}
 * ```
 * 
 * @constant
 */
export
const id_package_triggerCallManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* triggerCallManagement */ 63,
], id_package);

/* eslint-enable */
