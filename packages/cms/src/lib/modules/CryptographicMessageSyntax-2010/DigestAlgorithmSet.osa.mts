/* eslint-disable */
import { type DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { MessageDigestAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/MessageDigestAlgs.osa.mjs";


/**
 * @summary DigestAlgorithmSet
 * @description
 *
 * Object set of digest algorithms usable in this CMS profile
 * ([RFC 6268](https://datatracker.ietf.org/doc/html/rfc6268)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmSet DIGEST-ALGORITHM ::= {
 * CryptographicMessageSyntaxAlgorithms-2009.MessageDigestAlgs, ... }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const DigestAlgorithmSet: DIGEST_ALGORITHM[] = [
    ...MessageDigestAlgs,
];

/* eslint-enable */
