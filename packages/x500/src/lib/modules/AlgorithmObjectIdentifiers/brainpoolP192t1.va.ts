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

/* START_OF_SYMBOL_DEFINITION brainpoolP192t1 */
/**
 * @summary brainpoolP192t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP192t1 ID ::= { versionOne 4 }
 * ```
 *
 * @constant
 */
export const brainpoolP192t1: ID = new _OID([4], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP192t1 */

/* eslint-enable */
