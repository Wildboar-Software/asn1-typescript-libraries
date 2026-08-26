/* eslint-disable */
import { type DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";

/**
 * @summary MessageDigestAlgs
 * @description
 *
 * Object set of CMS message-digest algorithms ([RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDigestAlgs DIGEST-ALGORITHM ::= {
 * --   mda-md5 | mda-sha1,
 * ... }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const MessageDigestAlgs: DIGEST_ALGORITHM[] = [];

/* eslint-enable */
