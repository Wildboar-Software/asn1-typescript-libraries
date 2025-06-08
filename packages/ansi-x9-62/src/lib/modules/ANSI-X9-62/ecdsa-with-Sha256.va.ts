/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va";
export { ecdsa_with_Specified } from "../ANSI-X9-62/ecdsa-with-Specified.va";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_Sha256 */
/**
 * @summary ecdsa_with_Sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha256 OBJECT IDENTIFIER ::= {ecdsa-with-Specified 2}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha256: OBJECT_IDENTIFIER = new _OID(
    [2],
    ecdsa_with_Specified
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_Sha256 */

/* eslint-enable */
