/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_tfcOperations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-tfcOperations OBJECT IDENTIFIER ::= {id-package tfcOperations(64)}
 * ```
 * 
 * @constant
 */
export
const id_package_tfcOperations: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tfcOperations */ 64,
], id_package);

/* eslint-enable */
