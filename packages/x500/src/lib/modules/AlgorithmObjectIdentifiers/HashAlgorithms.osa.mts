/* eslint-disable */
import { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa.mjs";
import { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa.mjs";
import { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa.mjs";
import { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa.mjs";
import { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa.mjs";
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
/**
 * @summary HashAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithms ALGORITHM ::= {sha1Algorithm |
 *                               sha224 |
 *                               sha256 |
 *                               sha384 |
 *                               sha512 }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const HashAlgorithms: ALGORITHM[] = [
    sha1Algorithm,
    sha224,
    sha256,
    sha384,
    sha512,
];

/* eslint-enable */
