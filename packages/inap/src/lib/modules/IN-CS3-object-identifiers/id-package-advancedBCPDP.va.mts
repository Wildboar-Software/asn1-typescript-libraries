/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_advancedBCPDP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-advancedBCPDP OBJECT IDENTIFIER ::= {id-package advancedBCPDP(14)}
 * ```
 * 
 * @constant
 */
export
const id_package_advancedBCPDP: OBJECT_IDENTIFIER = _OID.fromParts([
    /* advancedBCPDP */ 14,
], id_package);

/* eslint-enable */
