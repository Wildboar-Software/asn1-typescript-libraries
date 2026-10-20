/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS2-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_signallingControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-signallingControl OBJECT IDENTIFIER ::= {id-package 33}
 * ```
 * 
 * @constant
 */
export
const id_package_signallingControl: OBJECT_IDENTIFIER = _OID.fromParts([
    33,
], id_package);

/* eslint-enable */
