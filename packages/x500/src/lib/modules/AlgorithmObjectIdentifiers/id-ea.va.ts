/* eslint-disable */
import { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_ea */
/**
 * @summary id_ea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ea                   ID ::= encryptionAlgorithm
 * ```
 *
 * @constant
 */
export const id_ea: ID = encryptionAlgorithm;
/* END_OF_SYMBOL_DEFINITION id_ea */

/* eslint-enable */
