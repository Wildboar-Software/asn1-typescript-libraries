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

/* START_OF_SYMBOL_DEFINITION hashAlgs */
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
export const hashAlgs: ID = new _OID([/* hashalgs */ 2], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION hashAlgs */

/* eslint-enable */
