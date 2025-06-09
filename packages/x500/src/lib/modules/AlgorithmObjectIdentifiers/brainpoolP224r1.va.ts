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

/* START_OF_SYMBOL_DEFINITION brainpoolP224r1 */
/**
 * @summary brainpoolP224r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP224r1 ID ::= { versionOne 5 }
 * ```
 *
 * @constant
 */
export const brainpoolP224r1: ID = new _OID([5], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP224r1 */

/* eslint-enable */
