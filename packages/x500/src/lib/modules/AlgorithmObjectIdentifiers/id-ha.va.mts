/* eslint-disable */
import { hashAlgorithm } from "../AlgorithmObjectIdentifiers/hashAlgorithm.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { hashAlgorithm } from "../AlgorithmObjectIdentifiers/hashAlgorithm.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";

/* START_OF_SYMBOL_DEFINITION id_ha */
/**
 * @summary id_ha
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ha                   ID ::= hashAlgorithm
 * ```
 *
 * @constant
 */
export const id_ha: ID = hashAlgorithm;
/* END_OF_SYMBOL_DEFINITION id_ha */

/* eslint-enable */
