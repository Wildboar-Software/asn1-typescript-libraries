/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_shadowConsumer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-shadowConsumer OBJECT IDENTIFIER ::= {id-package shadowConsumer(52)}
 * ```
 * 
 * @constant
 */
export
const id_package_shadowConsumer: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shadowConsumer */ 52,
], id_package);

/* eslint-enable */
