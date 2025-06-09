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

/* START_OF_SYMBOL_DEFINITION sigAlgs */
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
export const sigAlgs: ID = new _OID([3], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION sigAlgs */

/* eslint-enable */
