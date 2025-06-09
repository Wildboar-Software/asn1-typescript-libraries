/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va.js";

/* START_OF_SYMBOL_DEFINITION aes */
/**
 * @summary aes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes                     ID ::= { nistAlgorithms 1 }
 * ```
 *
 * @constant
 */
export const aes: ID = new _OID([1], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION aes */

/* eslint-enable */
