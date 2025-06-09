/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { dodAlgorithms } from "../AlgorithmObjectIdentifiers/dodAlgorithms.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { dodAlgorithms } from "../AlgorithmObjectIdentifiers/dodAlgorithms.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_keyExchangeAlgorithm */
/**
 * @summary id_keyExchangeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-keyExchangeAlgorithm ID ::= { dodAlgorithms id-keyExchangeAlgorithm(22)}
 * ```
 *
 * @constant
 */
export const id_keyExchangeAlgorithm: ID = new _OID(
    [/* id-keyExchangeAlgorithm */ 22],
    dodAlgorithms
);
/* END_OF_SYMBOL_DEFINITION id_keyExchangeAlgorithm */

/* eslint-enable */
