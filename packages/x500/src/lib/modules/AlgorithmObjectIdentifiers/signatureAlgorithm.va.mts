/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const signatureAlgorithm: ID = _OID.fromParts([3], algorithm);

/* eslint-enable */
