/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_bcsmEventHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-bcsmEventHandling OBJECT IDENTIFIER ::= {id-package bcsmEventHandling(21)}
 * ```
 * 
 * @constant
 */
export
const id_package_bcsmEventHandling: OBJECT_IDENTIFIER = _OID.fromParts([
    /* bcsmEventHandling */ 21,
], id_package);

/* eslint-enable */
