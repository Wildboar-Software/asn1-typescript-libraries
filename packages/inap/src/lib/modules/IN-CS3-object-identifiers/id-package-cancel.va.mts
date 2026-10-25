/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cancel OBJECT IDENTIFIER ::= {id-package cancel(36)}
 * ```
 * 
 * @constant
 */
export
const id_package_cancel: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cancel */ 36,
], id_package);

/* eslint-enable */
