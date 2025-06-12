/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.js";
export { id_publicKeyType } from "../ANSI-X9-62/id-publicKeyType.va.js";

/* START_OF_SYMBOL_DEFINITION id_ecPublicKey */
/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {
 * id-publicKeyType unrestricted(1)
 * }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = new _OID(
    [/* unrestricted */ 1],
    id_publicKeyType
);
/* END_OF_SYMBOL_DEFINITION id_ecPublicKey */

/* eslint-enable */
