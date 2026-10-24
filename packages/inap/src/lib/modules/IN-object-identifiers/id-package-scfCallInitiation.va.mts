/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_scfCallInitiation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-scfCallInitiation OBJECT IDENTIFIER ::= {id-package scfCallInitiation(25)}
 * ```
 * 
 * @constant
 */
export
const id_package_scfCallInitiation: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scfCallInitiation */ 25,
], id_package);

/* eslint-enable */
