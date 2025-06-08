/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va";
export { keyDerivationMethod } from "../ANSI-X9-42/keyDerivationMethod.va";

/* START_OF_SYMBOL_DEFINITION kdConcatenation */
/**
 * @summary kdConcatenation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kdConcatenation    OBJECT IDENTIFIER ::= {keyDerivationMethod concatenation(1)}
 * ```
 *
 * @constant
 */
export const kdConcatenation: OBJECT_IDENTIFIER = new _OID(
    [/* concatenation */ 1],
    keyDerivationMethod
);
/* END_OF_SYMBOL_DEFINITION kdConcatenation */

/* eslint-enable */
