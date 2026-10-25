/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_callHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-callHandling OBJECT IDENTIFIER ::= {id-package callHandling(20)}
 * ```
 * 
 * @constant
 */
export
const id_package_callHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    /* callHandling */ 20,
], id_package);

/* eslint-enable */
