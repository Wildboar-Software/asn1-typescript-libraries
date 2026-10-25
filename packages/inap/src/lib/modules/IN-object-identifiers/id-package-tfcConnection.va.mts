/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_tfcConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-tfcConnection OBJECT IDENTIFIER ::= {id-package tfcConnection(65)}
 * ```
 * 
 * @constant
 */
export
const id_package_tfcConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tfcConnection */ 65,
], id_package);

/* eslint-enable */
