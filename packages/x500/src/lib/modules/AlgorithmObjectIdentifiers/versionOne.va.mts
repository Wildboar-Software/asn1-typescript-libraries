/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ecStdCurvesAndGen } from "../AlgorithmObjectIdentifiers/ecStdCurvesAndGen.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { ecStdCurvesAndGen } from "../AlgorithmObjectIdentifiers/ecStdCurvesAndGen.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION versionOne */
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
export const versionOne: ID = new _OID(
    [/* ellipticCurve */ 1, /* versionOne */ 1],
    ecStdCurvesAndGen
);
/* END_OF_SYMBOL_DEFINITION versionOne */

/* eslint-enable */
