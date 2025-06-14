/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
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
