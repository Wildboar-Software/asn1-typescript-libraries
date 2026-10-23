/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_srf_scfActivationOfAssist
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-srf-scfActivationOfAssist OBJECT IDENTIFIER ::= {id-package srf-scfActivationOfAssist(15)}
 * ```
 * 
 * @constant
 */
export
const id_package_srf_scfActivationOfAssist: OBJECT_IDENTIFIER = _OID.fromParts([
    /* srf-scfActivationOfAssist */ 15,
], id_package);

/* eslint-enable */
