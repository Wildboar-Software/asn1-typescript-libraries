/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary sha224WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha224WithRSAEncryption  OBJECT IDENTIFIER ::= { pkcs-1 14 }
 * ```
 *
 * @constant
 */
export const sha224WithRSAEncryption: OBJECT_IDENTIFIER = new _OID(
    [14],
    pkcs_1
);

/* eslint-enable */
