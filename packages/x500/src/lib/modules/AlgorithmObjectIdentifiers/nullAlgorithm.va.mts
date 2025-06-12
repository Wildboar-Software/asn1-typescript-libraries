/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { algorithm } from "../UsefulDefinitions/algorithm.va.mjs";

/* START_OF_SYMBOL_DEFINITION nullAlgorithm */
/**
 * @summary nullAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullAlgorithm           ID ::= {algorithm 0}
 * ```
 *
 * @constant
 */
export const nullAlgorithm: ID = new _OID([0], algorithm);
/* END_OF_SYMBOL_DEFINITION nullAlgorithm */

/* eslint-enable */
