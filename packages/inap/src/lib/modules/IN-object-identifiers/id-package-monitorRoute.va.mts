/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_monitorRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-monitorRoute OBJECT IDENTIFIER ::= {id-package monitorRoute(77)}
 * ```
 * 
 * @constant
 */
export
const id_package_monitorRoute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* monitorRoute */ 77,
], id_package);

/* eslint-enable */
