/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_ssfCallProcessing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-ssfCallProcessing OBJECT IDENTIFIER ::= {id-package ssfCallProcessing(24)}
 * ```
 * 
 * @constant
 */
export
const id_package_ssfCallProcessing: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ssfCallProcessing */ 24,
], id_package);

/* eslint-enable */
