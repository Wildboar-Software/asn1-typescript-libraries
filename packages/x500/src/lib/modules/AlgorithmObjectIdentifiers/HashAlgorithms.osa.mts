/* eslint-disable */
import { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa.mjs";
import { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa.mjs";
import { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa.mjs";
import { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa.mjs";
import { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa.mjs";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";
export { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa.mjs";
export { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa.mjs";
export { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa.mjs";
export { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa.mjs";
export { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa.mjs";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";

/* START_OF_SYMBOL_DEFINITION HashAlgorithms */
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
/* END_OF_SYMBOL_DEFINITION HashAlgorithms */

/* eslint-enable */
