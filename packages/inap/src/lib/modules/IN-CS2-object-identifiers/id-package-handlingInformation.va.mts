/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_handlingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-handlingInformation OBJECT IDENTIFIER ::= {id-package 54}
 * ```
 * 
 * @constant
 */
export
const id_package_handlingInformation: OBJECT_IDENTIFIER = _OID.fromParts([
    54,
], id_package);

/* eslint-enable */
