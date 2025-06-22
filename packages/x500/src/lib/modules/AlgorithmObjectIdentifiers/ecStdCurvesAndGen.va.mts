/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { teletrust } from "../AlgorithmObjectIdentifiers/teletrust.va.mjs";
/**
 * @summary ecStdCurvesAndGen
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecStdCurvesAndGen       ID ::= { teletrust algorithm(3) signature-algorithm(3) ecSign(2) 8}
 * ```
 *
 * @constant
 */
export const ecStdCurvesAndGen: ID = _OID.fromParts(
    [/* algorithm */ 3, /* signature-algorithm */ 3, /* ecSign */ 2, 8],
    teletrust
);

/* eslint-enable */
