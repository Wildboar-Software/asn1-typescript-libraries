/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_emptyConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-emptyConnection OBJECT IDENTIFIER ::= {id-package emptyConnection(60)}
 * ```
 * 
 * @constant
 */
export
const id_package_emptyConnection: OBJECT_IDENTIFIER = _OID.fromParts([
    /* emptyConnection */ 60,
], id_package);

/* eslint-enable */
