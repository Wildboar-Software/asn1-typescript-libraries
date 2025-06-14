/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { csor } from "../AlgorithmObjectIdentifiers/csor.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary nistAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nistAlgorithms          ID ::= { csor nistAlgorithm(4) }
 * ```
 *
 * @constant
 */
export const nistAlgorithms: ID = new _OID([/* nistAlgorithm */ 4], csor);

/* eslint-enable */
