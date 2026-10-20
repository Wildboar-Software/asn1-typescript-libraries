/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_genericDisconnectResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-genericDisconnectResource OBJECT IDENTIFIER ::= {id-package genericDisconnectResource(17)}
 * ```
 * 
 * @constant
 */
export
const id_package_genericDisconnectResource: OBJECT_IDENTIFIER = _OID.fromParts([
    /* genericDisconnectResource */ 17,
], id_package);

/* eslint-enable */
