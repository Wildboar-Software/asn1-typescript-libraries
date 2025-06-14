/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";
/**
 * @summary signatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signatureAlgorithm      ID ::= {algorithm 3}
 * ```
 *
 * @constant
 */
export const signatureAlgorithm: ID = new _OID([3], algorithm);

/* eslint-enable */
