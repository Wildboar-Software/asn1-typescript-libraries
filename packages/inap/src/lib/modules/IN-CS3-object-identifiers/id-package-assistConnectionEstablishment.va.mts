/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_assistConnectionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-assistConnectionEstablishment OBJECT IDENTIFIER ::= {id-package assistConnectionEstablishment(16)}
 * ```
 * 
 * @constant
 */
export
const id_package_assistConnectionEstablishment: OBJECT_IDENTIFIER = _OID.fromParts([
    /* assistConnectionEstablishment */ 16,
], id_package);

/* eslint-enable */
