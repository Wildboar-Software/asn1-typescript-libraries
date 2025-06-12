/* eslint-disable */
import { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";

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
