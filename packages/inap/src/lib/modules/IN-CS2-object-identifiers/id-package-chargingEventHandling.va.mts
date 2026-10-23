/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_chargingEventHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-chargingEventHandling OBJECT IDENTIFIER ::= {id-package 23}
 * ```
 * 
 * @constant
 */
export
const id_package_chargingEventHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    23,
], id_package);

/* eslint-enable */
