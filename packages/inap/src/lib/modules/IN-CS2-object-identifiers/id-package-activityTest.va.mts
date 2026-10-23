/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_activityTest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-activityTest OBJECT IDENTIFIER ::= {id-package 34}
 * ```
 * 
 * @constant
 */
export
const id_package_activityTest: OBJECT_IDENTIFIER = _OID.fromParts([
    34,
], id_package);

/* eslint-enable */
