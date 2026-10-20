/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_basicBCPDP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-basicBCPDP OBJECT IDENTIFIER ::= {id-package 12}
 * ```
 * 
 * @constant
 */
export
const id_package_basicBCPDP: OBJECT_IDENTIFIER = _OID.fromParts([
    12,
], id_package);

/* eslint-enable */
