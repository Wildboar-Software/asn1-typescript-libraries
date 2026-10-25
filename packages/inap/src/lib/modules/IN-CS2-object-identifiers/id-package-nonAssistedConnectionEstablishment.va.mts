/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_nonAssistedConnectionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-nonAssistedConnectionEstablishment OBJECT IDENTIFIER ::= {id-package 18}
 * ```
 * 
 * @constant
 */
export
const id_package_nonAssistedConnectionEstablishment: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], id_package);

/* eslint-enable */
