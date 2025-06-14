/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/* START_OF_SYMBOL_DEFINITION sha224WithRSAEncryption */
/**
 * @summary sha224WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryption ID ::= { pkcs-1 sha224WithRSAEncryption(14) }
 * ```
 *
 * @constant
 */
export const sha224WithRSAEncryption: ID = new _OID(
    [/* sha224WithRSAEncryption */ 14],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha224WithRSAEncryption */

/* eslint-enable */
