/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_billing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-billing OBJECT IDENTIFIER ::= {id-package 27}
 * ```
 * 
 * @constant
 */
export
const id_package_billing: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], id_package);

/* eslint-enable */
