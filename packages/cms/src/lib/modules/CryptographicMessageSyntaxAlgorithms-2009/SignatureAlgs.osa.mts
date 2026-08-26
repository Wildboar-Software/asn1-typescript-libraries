/* eslint-disable */
import { type SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";

/**
 * @summary SignatureAlgs
 * @description
 *
 * Object set of CMS signature algorithms ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgs SIGNATURE-ALGORITHM ::= {
 * --  See RFC 3279
 * --  sa-dsaWithSHA1 |  sa-rsaWithMD5 | sa-rsaWithSHA1,
 * ... }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM[]}
 *
 */
export const SignatureAlgs: SIGNATURE_ALGORITHM[] = [];

/* eslint-enable */
