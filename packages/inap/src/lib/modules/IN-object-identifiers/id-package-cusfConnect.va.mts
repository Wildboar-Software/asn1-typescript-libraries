/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfConnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfConnect OBJECT IDENTIFIER ::= {id-package cusfConnect(72)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfConnect: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfConnect */ 72,
], id_package);

/* eslint-enable */
