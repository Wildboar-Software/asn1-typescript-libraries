/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary sha512_256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512-256WithRSAEncryption  OBJECT IDENTIFIER ::= { pkcs-1 16 }
 * ```
 *
 * @constant
 */
export const sha512_256WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts(
    [16],
    pkcs_1
);

/* eslint-enable */
