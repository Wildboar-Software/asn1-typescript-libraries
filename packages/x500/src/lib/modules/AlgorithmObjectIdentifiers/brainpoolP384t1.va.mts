/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va.mjs";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
export { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va.mjs";

/* START_OF_SYMBOL_DEFINITION brainpoolP384t1 */
/**
 * @summary brainpoolP384t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP384t1 ID ::= { versionOne 12 }
 * ```
 *
 * @constant
 */
export const brainpoolP384t1: ID = new _OID([12], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP384t1 */

/* eslint-enable */
