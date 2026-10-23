/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_connect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-connect OBJECT IDENTIFIER ::= {id-package 19}
 * ```
 * 
 * @constant
 */
export
const id_package_connect: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], id_package);

/* eslint-enable */
