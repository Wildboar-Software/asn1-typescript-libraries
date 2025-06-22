/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const nistAlgorithms: ID = _OID.fromParts([/* nistAlgorithm */ 4], csor);

/* eslint-enable */
