/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_inchainedSearch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-inchainedSearch OBJECT IDENTIFIER ::= {id-package 49}
 * ```
 * 
 * @constant
 */
export
const id_package_inchainedSearch: OBJECT_IDENTIFIER = _OID.fromParts([
    49,
], id_package);

/* eslint-enable */
