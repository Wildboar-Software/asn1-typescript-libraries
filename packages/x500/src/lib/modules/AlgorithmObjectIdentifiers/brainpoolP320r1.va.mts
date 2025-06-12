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

/* START_OF_SYMBOL_DEFINITION brainpoolP320r1 */
/**
 * @summary brainpoolP320r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP320r1 ID ::= { versionOne 9 }
 * ```
 *
 * @constant
 */
export const brainpoolP320r1: ID = new _OID([9], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP320r1 */

/* eslint-enable */
