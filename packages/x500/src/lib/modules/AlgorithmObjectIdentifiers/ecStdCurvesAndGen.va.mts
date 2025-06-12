/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { teletrust } from "../AlgorithmObjectIdentifiers/teletrust.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { teletrust } from "../AlgorithmObjectIdentifiers/teletrust.va.mjs";

/* START_OF_SYMBOL_DEFINITION ecStdCurvesAndGen */
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
export const ecStdCurvesAndGen: ID = new _OID(
    [/* algorithm */ 3, /* signature-algorithm */ 3, /* ecSign */ 2, 8],
    teletrust
);
/* END_OF_SYMBOL_DEFINITION ecStdCurvesAndGen */

/* eslint-enable */
