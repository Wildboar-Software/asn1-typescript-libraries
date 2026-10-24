/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfComponentHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfComponentHandling OBJECT IDENTIFIER ::= {id-package cusfComponentHandling(69)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfComponentHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfComponentHandling */ 69,
], id_package);

/* eslint-enable */
