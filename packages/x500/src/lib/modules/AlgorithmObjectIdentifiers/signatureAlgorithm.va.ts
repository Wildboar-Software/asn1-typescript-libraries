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

/* START_OF_SYMBOL_DEFINITION signatureAlgorithm */
/**
 * @summary signatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signatureAlgorithm      ID ::= {algorithm 3}
 * ```
 *
 * @constant
 */
export const signatureAlgorithm: ID = new _OID([3], algorithm);
/* END_OF_SYMBOL_DEFINITION signatureAlgorithm */

/* eslint-enable */
