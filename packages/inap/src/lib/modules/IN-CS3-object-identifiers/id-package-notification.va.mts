/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-notification OBJECT IDENTIFIER ::= {id-package notification(55)}
 * ```
 * 
 * @constant
 */
export
const id_package_notification: OBJECT_IDENTIFIER = _OID.fromParts([
    /* notification */ 55,
], id_package);

/* eslint-enable */
