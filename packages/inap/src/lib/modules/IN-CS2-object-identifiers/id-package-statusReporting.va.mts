/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_statusReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-statusReporting OBJECT IDENTIFIER ::= {id-package 35}
 * ```
 * 
 * @constant
 */
export
const id_package_statusReporting: OBJECT_IDENTIFIER = _OID.fromParts([
    35,
], id_package);

/* eslint-enable */
