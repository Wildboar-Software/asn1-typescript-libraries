/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_chainedSCFOperations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-chainedSCFOperations OBJECT IDENTIFIER ::= {id-package chainedSCFOperations(59)}
 * ```
 * 
 * @constant
 */
export
const id_package_chainedSCFOperations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* chainedSCFOperations */ 59,
], id_package);

/* eslint-enable */
