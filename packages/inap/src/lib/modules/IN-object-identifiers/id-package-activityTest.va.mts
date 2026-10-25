/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_activityTest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-activityTest OBJECT IDENTIFIER ::= {id-package activityTest(34)}
 * ```
 * 
 * @constant
 */
export
const id_package_activityTest: OBJECT_IDENTIFIER = _OID.fromParts([
    /* activityTest */ 34,
], id_package);

/* eslint-enable */
