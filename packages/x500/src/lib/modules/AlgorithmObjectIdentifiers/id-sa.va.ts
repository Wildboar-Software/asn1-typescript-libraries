/* eslint-disable */
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { signatureAlgorithm } from "../AlgorithmObjectIdentifiers/signatureAlgorithm.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { signatureAlgorithm } from "../AlgorithmObjectIdentifiers/signatureAlgorithm.va.js";

/* START_OF_SYMBOL_DEFINITION id_sa */
/**
 * @summary id_sa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sa                   ID ::= signatureAlgorithm
 * ```
 *
 * @constant
 */
export const id_sa: ID = signatureAlgorithm;
/* END_OF_SYMBOL_DEFINITION id_sa */

/* eslint-enable */
