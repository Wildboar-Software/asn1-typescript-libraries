/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION id_aes256_wrap */
/**
 * @summary id_aes256_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes256-wrap          ID ::= { aes 45 }
 * ```
 *
 * @constant
 */
export const id_aes256_wrap: ID = new _OID([45], aes);
/* END_OF_SYMBOL_DEFINITION id_aes256_wrap */

/* eslint-enable */
