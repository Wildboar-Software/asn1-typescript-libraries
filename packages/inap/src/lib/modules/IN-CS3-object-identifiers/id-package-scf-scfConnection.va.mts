/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_scf_scfConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-scf-scfConnection OBJECT IDENTIFIER ::= {id-package scf-scfConnection(46)}
 * ```
 * 
 * @constant
 */
export
const id_package_scf_scfConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-scfConnection */ 46,
], id_package);

/* eslint-enable */
