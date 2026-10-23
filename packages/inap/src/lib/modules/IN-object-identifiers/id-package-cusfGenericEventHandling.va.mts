/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfGenericEventHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfGenericEventHandling OBJECT IDENTIFIER ::= {id-package cusfGenericEventHandling(68)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfGenericEventHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfGenericEventHandling */ 68,
], id_package);

/* eslint-enable */
