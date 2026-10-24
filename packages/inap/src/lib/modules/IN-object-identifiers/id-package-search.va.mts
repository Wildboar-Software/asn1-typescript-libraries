/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_search
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-search OBJECT IDENTIFIER ::= {id-package search(2)}
 * ```
 * 
 * @constant
 */
export
const id_package_search: OBJECT_IDENTIFIER = _OID.fromParts([
    /* search */ 2,
], id_package);

/* eslint-enable */
