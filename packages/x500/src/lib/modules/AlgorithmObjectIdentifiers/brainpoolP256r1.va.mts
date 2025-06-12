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

/* START_OF_SYMBOL_DEFINITION brainpoolP256r1 */
/**
 * @summary brainpoolP256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256r1 ID ::= { versionOne 7 }
 * ```
 *
 * @constant
 */
export const brainpoolP256r1: ID = new _OID([7], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP256r1 */

/* eslint-enable */
