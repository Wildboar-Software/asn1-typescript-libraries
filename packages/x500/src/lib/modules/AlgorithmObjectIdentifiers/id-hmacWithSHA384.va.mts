/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_hmacWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA384       ID ::= { digestAlgorithm 10 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA384: ID = _OID.fromParts([10], digestAlgorithm);

/* eslint-enable */
