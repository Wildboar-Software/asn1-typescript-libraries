/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption   ID ::= { pkcs-1 sha1WithRSAEncryption(5) }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: ID = _OID.fromParts(
    [/* sha1WithRSAEncryption */ 5],
    pkcs_1
);

/* eslint-enable */
