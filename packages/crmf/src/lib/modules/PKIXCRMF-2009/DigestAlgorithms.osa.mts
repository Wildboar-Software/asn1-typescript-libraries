/* eslint-disable */
import type { DIGEST_ALGORITHM } from "@wildboar/cms";
import { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.mjs";


/**
 * @summary DigestAlgorithms
 * @description
 *
 * Digest algorithms permitted in this CRMF module; initially
 * `mda-sha1` with extension (`...`) ([RFC 5912 §10](https://datatracker.ietf.org/doc/html/rfc5912#section-10)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithms DIGEST-ALGORITHM ::= {
 *     mda-sha1, ...
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const DigestAlgorithms: DIGEST_ALGORITHM[] = [mda_sha1];

/* eslint-enable */
