/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";
/**
 * @summary hashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlgorithm           ID ::= {algorithm 2}
 * ```
 *
 * @constant
 */
export const hashAlgorithm: ID = new _OID([2], algorithm);

/* eslint-enable */
