/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_charging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-charging OBJECT IDENTIFIER ::= {id-package charging(28)}
 * ```
 * 
 * @constant
 */
export
const id_package_charging: OBJECT_IDENTIFIER = _OID.fromParts([
    /* charging */ 28,
], id_package);

/* eslint-enable */
