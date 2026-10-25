/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_timer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-timer OBJECT IDENTIFIER ::= {id-package timer(26)}
 * ```
 * 
 * @constant
 */
export
const id_package_timer: OBJECT_IDENTIFIER = _OID.fromParts([
    /* timer */ 26,
], id_package);

/* eslint-enable */
