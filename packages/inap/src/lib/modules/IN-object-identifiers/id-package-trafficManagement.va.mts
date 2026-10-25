/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_trafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-trafficManagement OBJECT IDENTIFIER ::= {id-package trafficManagement(78)}
 * ```
 * 
 * @constant
 */
export
const id_package_trafficManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* trafficManagement */ 78,
], id_package);

/* eslint-enable */
