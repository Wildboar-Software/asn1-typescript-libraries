/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { aes } from "../AlgorithmObjectIdentifiers/aes.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_aes128_wrap */
/**
 * @summary id_aes128_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-wrap          ID ::= { aes 5 }
 * ```
 *
 * @constant
 */
export const id_aes128_wrap: ID = new _OID([5], aes);
/* END_OF_SYMBOL_DEFINITION id_aes128_wrap */

/* eslint-enable */
