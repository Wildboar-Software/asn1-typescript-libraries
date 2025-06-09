/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va.js";

/* START_OF_SYMBOL_DEFINITION brainpoolP224t1 */
/**
 * @summary brainpoolP224t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP224t1 ID ::= { versionOne 6 }
 * ```
 *
 * @constant
 */
export const brainpoolP224t1: ID = new _OID([6], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP224t1 */

/* eslint-enable */
