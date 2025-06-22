/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption        OBJECT IDENTIFIER ::= { pkcs-1 5 }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts([5], pkcs_1);

/* eslint-enable */
