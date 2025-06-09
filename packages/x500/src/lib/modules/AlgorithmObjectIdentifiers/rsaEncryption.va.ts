/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.js";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.js";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta.js";
export { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.js";

/* START_OF_SYMBOL_DEFINITION rsaEncryption */
/**
 * @summary rsaEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryption           ID ::= { pkcs-1 rsaEncryption(1)}
 * ```
 *
 * @constant
 */
export const rsaEncryption: ID = new _OID([/* rsaEncryption */ 1], pkcs_1);
/* END_OF_SYMBOL_DEFINITION rsaEncryption */

/* eslint-enable */
