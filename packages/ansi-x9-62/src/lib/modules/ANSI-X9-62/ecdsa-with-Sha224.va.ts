/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.js";
export { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.js";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_Sha224 */
/**
 * @summary ecdsa_with_Sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha224 OBJECT IDENTIFIER ::= {ecdsa-with-Specified 1}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha224: OBJECT_IDENTIFIER = new _OID(
    [1],
    ecdsa_with_Specified
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Sha224 */

/* eslint-enable */
