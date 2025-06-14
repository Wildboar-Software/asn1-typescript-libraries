/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va.mjs";
/* START_OF_SYMBOL_DEFINITION aes */
/**
 * @summary aes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes                     ID ::= { nistAlgorithms 1 }
 * ```
 *
 * @constant
 */
export const aes: ID = new _OID([1], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION aes */

/* eslint-enable */
