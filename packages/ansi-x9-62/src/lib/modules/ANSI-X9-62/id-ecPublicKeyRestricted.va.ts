/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.js";
export { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.js";

/* START_OF_SYMBOL_DEFINITION id_ecPublicKeyRestricted */
/**
 * @summary id_ecPublicKeyRestricted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKeyRestricted OBJECT IDENTIFIER ::= {
 * id-publicKeyType restricted(2)
 * }
 * ```
 *
 * @constant
 */
export const id_ecPublicKeyRestricted: OBJECT_IDENTIFIER = new _OID(
    [/* restricted */ 2],
    id_publicKeyType
);
/* END_OF_SYMBOL_DEFINITION id_ecPublicKeyRestricted */

/* eslint-enable */
