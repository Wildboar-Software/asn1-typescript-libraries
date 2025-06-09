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

/* START_OF_SYMBOL_DEFINITION brainpoolP384r1 */
/**
 * @summary brainpoolP384r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP384r1 ID ::= { versionOne 11 }
 * ```
 *
 * @constant
 */
export const brainpoolP384r1: ID = new _OID([11], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP384r1 */

/* eslint-enable */
