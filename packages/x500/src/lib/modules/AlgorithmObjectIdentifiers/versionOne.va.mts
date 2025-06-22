/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ecStdCurvesAndGen } from "../AlgorithmObjectIdentifiers/ecStdCurvesAndGen.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary versionOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * versionOne              ID ::= { ecStdCurvesAndGen ellipticCurve(1) versionOne(1) }
 * ```
 *
 * @constant
 */
export const versionOne: ID = _OID.fromParts(
    [/* ellipticCurve */ 1, /* versionOne */ 1],
    ecStdCurvesAndGen
);

/* eslint-enable */
