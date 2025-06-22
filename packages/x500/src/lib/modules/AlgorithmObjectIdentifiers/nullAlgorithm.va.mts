/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";
/**
 * @summary nullAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullAlgorithm           ID ::= {algorithm 0}
 * ```
 *
 * @constant
 */
export const nullAlgorithm: ID = _OID.fromParts([0], algorithm);

/* eslint-enable */
