/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary sha512WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryption ID ::= { pkcs-1 sha512WithRSAEncryption(13) }
 * ```
 *
 * @constant
 */
export const sha512WithRSAEncryption: ID = _OID.fromParts(
    [/* sha512WithRSAEncryption */ 13],
    pkcs_1
);

/* eslint-enable */
