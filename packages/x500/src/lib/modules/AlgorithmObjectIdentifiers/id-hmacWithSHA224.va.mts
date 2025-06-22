/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA224       ID ::= { digestAlgorithm 8 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA224: ID = _OID.fromParts([8], digestAlgorithm);

/* eslint-enable */
