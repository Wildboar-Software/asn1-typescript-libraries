/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_chainedExecute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-chainedExecute OBJECT IDENTIFIER ::= {id-package chainedExecute(50)}
 * ```
 * 
 * @constant
 */
export
const id_package_chainedExecute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* chainedExecute */ 50,
], id_package);

/* eslint-enable */
