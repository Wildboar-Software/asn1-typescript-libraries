/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cphResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cphResponse OBJECT IDENTIFIER ::= {id-package cphResponse(37)}
 * ```
 * 
 * @constant
 */
export
const id_package_cphResponse: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cphResponse */ 37,
], id_package);

/* eslint-enable */
