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

/* START_OF_SYMBOL_DEFINITION id_aes192_CBC */
/**
 * @summary id_aes192_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes192-CBC           ID ::= { aes 22 }
 * ```
 *
 * @constant
 */
export const id_aes192_CBC: ID = new _OID([22], aes);
/* END_OF_SYMBOL_DEFINITION id_aes192_CBC */

/* eslint-enable */
