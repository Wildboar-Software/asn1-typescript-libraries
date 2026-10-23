/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_callReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-callReport OBJECT IDENTIFIER ::= {id-package 32}
 * ```
 * 
 * @constant
 */
export
const id_package_callReport: OBJECT_IDENTIFIER = _OID.fromParts([
    32,
], id_package);

/* eslint-enable */
