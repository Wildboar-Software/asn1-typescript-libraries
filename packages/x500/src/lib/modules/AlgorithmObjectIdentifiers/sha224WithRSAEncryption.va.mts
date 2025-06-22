/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
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
export const sha224WithRSAEncryption: ID = _OID.fromParts(
    [/* sha224WithRSAEncryption */ 14],
    pkcs_1
);

/* eslint-enable */
