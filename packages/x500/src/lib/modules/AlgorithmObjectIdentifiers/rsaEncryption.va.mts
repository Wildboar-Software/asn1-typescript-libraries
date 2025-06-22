/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
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
export const rsaEncryption: ID = _OID.fromParts([/* rsaEncryption */ 1], pkcs_1);

/* eslint-enable */
