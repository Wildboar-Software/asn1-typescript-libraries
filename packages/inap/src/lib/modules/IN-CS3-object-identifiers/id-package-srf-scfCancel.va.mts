/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_srf_scfCancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-srf-scfCancel OBJECT IDENTIFIER ::= {id-package srf-scfCancel(43)}
 * ```
 * 
 * @constant
 */
export
const id_package_srf_scfCancel: OBJECT_IDENTIFIER = _OID.fromParts([
    /* srf-scfCancel */ 43,
], id_package);

/* eslint-enable */
