/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_billing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-billing OBJECT IDENTIFIER ::= {id-package billing(27)}
 * ```
 * 
 * @constant
 */
export
const id_package_billing: OBJECT_IDENTIFIER = _OID.fromParts([
    /* billing */ 27,
], id_package);

/* eslint-enable */
