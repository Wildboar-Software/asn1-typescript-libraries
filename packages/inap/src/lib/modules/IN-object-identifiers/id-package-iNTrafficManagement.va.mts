/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_iNTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-iNTrafficManagement OBJECT IDENTIFIER ::= {id-package iNtrafficManagement(29)}
 * ```
 * 
 * @constant
 */
export
const id_package_iNTrafficManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iNtrafficManagement */ 29,
], id_package);

/* eslint-enable */
