/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_transferStsi
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-transferStsi OBJECT IDENTIFIER ::= {id-package transferStsi(75)}
 * ```
 * 
 * @constant
 */
export
const id_package_transferStsi: OBJECT_IDENTIFIER = _OID.fromParts([
    /* transferStsi */ 75,
], id_package);

/* eslint-enable */
