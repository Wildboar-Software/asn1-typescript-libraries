/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_modify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-modify OBJECT IDENTIFIER ::= {id-package modify(3)}
 * ```
 * 
 * @constant
 */
export
const id_package_modify: OBJECT_IDENTIFIER = _OID.fromParts([
    /* modify */ 3,
], id_package);

/* eslint-enable */
