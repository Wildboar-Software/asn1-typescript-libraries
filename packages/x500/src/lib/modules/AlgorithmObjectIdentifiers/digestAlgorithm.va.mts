/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va.mjs";
/**
 * @summary digestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digestAlgorithm         ID ::= { rsadsi digestAlgorithm(2) }
 * ```
 *
 * @constant
 */
export const digestAlgorithm: ID = _OID.fromParts([/* digestAlgorithm */ 2], rsadsi);

/* eslint-enable */
