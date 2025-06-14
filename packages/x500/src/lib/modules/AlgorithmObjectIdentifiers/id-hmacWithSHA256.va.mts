/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA256       ID ::= { digestAlgorithm 9 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA256: ID = new _OID([9], digestAlgorithm);

/* eslint-enable */
