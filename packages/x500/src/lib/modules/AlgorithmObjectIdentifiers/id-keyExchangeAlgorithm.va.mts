/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { dodAlgorithms } from "../AlgorithmObjectIdentifiers/dodAlgorithms.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
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
