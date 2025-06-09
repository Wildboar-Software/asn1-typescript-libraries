/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { algorithm } from "../UsefulDefinitions/algorithm.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { algorithm } from "../UsefulDefinitions/algorithm.va.js";

/* START_OF_SYMBOL_DEFINITION encryptionAlgorithm */
/**
 * @summary encryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptionAlgorithm     ID ::= {algorithm 1}
 * ```
 *
 * @constant
 */
export const encryptionAlgorithm: ID = new _OID([1], algorithm);
/* END_OF_SYMBOL_DEFINITION encryptionAlgorithm */

/* eslint-enable */
