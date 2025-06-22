/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_hmacWithSHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA512       ID ::= { digestAlgorithm 11 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA512: ID = _OID.fromParts([11], digestAlgorithm);

/* eslint-enable */
