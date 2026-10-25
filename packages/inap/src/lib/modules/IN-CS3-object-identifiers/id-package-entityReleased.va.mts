/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_entityReleased
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-entityReleased OBJECT IDENTIFIER ::= {id-package entityReleased(38)}
 * ```
 * 
 * @constant
 */
export
const id_package_entityReleased: OBJECT_IDENTIFIER = _OID.fromParts([
    /* entityReleased */ 38,
], id_package);

/* eslint-enable */
