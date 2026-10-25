/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_callReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-callReport OBJECT IDENTIFIER ::= {id-package callReport(32)}
 * ```
 * 
 * @constant
 */
export
const id_package_callReport: OBJECT_IDENTIFIER = _OID.fromParts([
    /* callReport */ 32,
], id_package);

/* eslint-enable */
