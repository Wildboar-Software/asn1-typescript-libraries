/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";
/**
 * @summary encryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptionAlgorithm     ID ::= {algorithm 1}
 * ```
 *
 * @constant
 */
export const encryptionAlgorithm: ID = new _OID([1], algorithm);

/* eslint-enable */
