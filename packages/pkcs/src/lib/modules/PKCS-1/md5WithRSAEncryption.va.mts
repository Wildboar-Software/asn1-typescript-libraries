/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary md5WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * md5WithRSAEncryption         OBJECT IDENTIFIER ::= { pkcs-1 4 }
 * ```
 *
 * @constant
 */
export const md5WithRSAEncryption: OBJECT_IDENTIFIER = _OID.fromParts([4], pkcs_1);

/* eslint-enable */
