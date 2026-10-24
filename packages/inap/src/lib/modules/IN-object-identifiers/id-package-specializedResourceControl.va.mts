/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_specializedResourceControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-specializedResourceControl OBJECT IDENTIFIER ::= {id-package specializedResourceControl(42)}
 * ```
 * 
 * @constant
 */
export
const id_package_specializedResourceControl: OBJECT_IDENTIFIER = _OID.fromParts([
    /* specializedResourceControl */ 42,
], id_package);

/* eslint-enable */
