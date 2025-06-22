/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va.mjs";
/**
 * @summary sigAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sigAlgs                 ID ::= { nistAlgorithms 3 }
 * ```
 *
 * @constant
 */
export const sigAlgs: ID = _OID.fromParts([3], nistAlgorithms);

/* eslint-enable */
