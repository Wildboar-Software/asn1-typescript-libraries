/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const hashAlgorithm: ID = _OID.fromParts([2], algorithm);

/* eslint-enable */
