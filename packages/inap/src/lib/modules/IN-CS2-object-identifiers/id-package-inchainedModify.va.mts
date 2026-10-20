/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_inchainedModify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-inchainedModify OBJECT IDENTIFIER ::= {id-package 48}
 * ```
 * 
 * @constant
 */
export
const id_package_inchainedModify: OBJECT_IDENTIFIER = _OID.fromParts([
    48,
], id_package);

/* eslint-enable */
