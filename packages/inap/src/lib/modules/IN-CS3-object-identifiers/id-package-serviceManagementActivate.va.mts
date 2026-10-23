/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_serviceManagementActivate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-serviceManagementActivate OBJECT IDENTIFIER ::= {id-package serviceManagementActivate(30)}
 * ```
 * 
 * @constant
 */
export
const id_package_serviceManagementActivate: OBJECT_IDENTIFIER = _OID.fromParts([
    /* serviceManagementActivate */ 30,
], id_package);

/* eslint-enable */
