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

/* START_OF_SYMBOL_DEFINITION brainpoolP256t1 */
/**
 * @summary brainpoolP256t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256t1 ID ::= { versionOne 8 }
 * ```
 *
 * @constant
 */
export const brainpoolP256t1: ID = new _OID([8], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP256t1 */

/* eslint-enable */
