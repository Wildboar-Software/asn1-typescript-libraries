/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.mjs";
export { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va.mjs";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_Sha384 */
/**
 * @summary ecdsa_with_Sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha384 OBJECT IDENTIFIER ::= {ecdsa-with-Specified 3}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha384: OBJECT_IDENTIFIER = new _OID(
    [3],
    ecdsa_with_Specified
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Sha384 */

/* eslint-enable */
