/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.js";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_shake256 */
/**
 * @summary id_shake256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256             ID ::= { hashAlgs 12 }
 * ```
 *
 * @constant
 */
export const id_shake256: ID = new _OID([12], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_shake256 */

/* eslint-enable */
