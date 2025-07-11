/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary sha384WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha384WithRSAEncryption ID ::= { pkcs-1 sha384WithRSAEncryption(12) }
 * ```
 *
 * @constant
 */
export const sha384WithRSAEncryption: ID = _OID.fromParts(
    [/* sha384WithRSAEncryption */ 12],
    pkcs_1
);

/* eslint-enable */
