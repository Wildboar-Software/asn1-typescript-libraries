/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfRelease OBJECT IDENTIFIER ::= {id-package cusfRelease(73)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfRelease: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfRelease */ 73,
], id_package);

/* eslint-enable */
