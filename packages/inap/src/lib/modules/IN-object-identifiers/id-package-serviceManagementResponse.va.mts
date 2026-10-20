/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_serviceManagementResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-serviceManagementResponse OBJECT IDENTIFIER ::= {id-package serviceManagementResponse(31)}
 * ```
 * 
 * @constant
 */
export
const id_package_serviceManagementResponse: OBJECT_IDENTIFIER = _OID.fromParts([
    /* serviceManagementResponse */ 31,
], id_package);

/* eslint-enable */
