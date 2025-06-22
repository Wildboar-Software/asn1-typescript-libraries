/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va.mjs";
/**
 * @summary hashAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlgs                ID ::= { nistAlgorithms hashalgs(2) }
 * ```
 *
 * @constant
 */
export const hashAlgs: ID = _OID.fromParts([/* hashalgs */ 2], nistAlgorithms);

/* eslint-enable */
