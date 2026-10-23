/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_assistConnectionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-assistConnectionEstablishment OBJECT IDENTIFIER ::= {id-package 16}
 * ```
 * 
 * @constant
 */
export
const id_package_assistConnectionEstablishment: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], id_package);

/* eslint-enable */
