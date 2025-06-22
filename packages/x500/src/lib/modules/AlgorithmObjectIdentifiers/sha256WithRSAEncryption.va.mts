/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary sha256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryption ID ::= { pkcs-1 sha256WithRSAEncryption(11) }
 * ```
 *
 * @constant
 */
export const sha256WithRSAEncryption: ID = _OID.fromParts(
    [/* sha256WithRSAEncryption */ 11],
    pkcs_1
);

/* eslint-enable */
