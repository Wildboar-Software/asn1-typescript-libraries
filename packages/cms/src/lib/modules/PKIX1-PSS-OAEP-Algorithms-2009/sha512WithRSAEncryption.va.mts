/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary sha512WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryption  OBJECT IDENTIFIER ::= { pkcs-1 13 }
 * ```
 *
 * @constant
 */
export const sha512WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts(
    [13],
    pkcs_1
);

/* eslint-enable */
