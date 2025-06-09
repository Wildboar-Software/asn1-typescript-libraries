/* eslint-disable */
import { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa.js";
import { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa.js";
import { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa.js";
import { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa.js";
import { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa.js";
import { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";
export { sha1Algorithm } from "../AlgorithmObjectIdentifiers/sha1Algorithm.oa.js";
export { sha224 } from "../AlgorithmObjectIdentifiers/sha224.oa.js";
export { sha256 } from "../AlgorithmObjectIdentifiers/sha256.oa.js";
export { sha384 } from "../AlgorithmObjectIdentifiers/sha384.oa.js";
export { sha512 } from "../AlgorithmObjectIdentifiers/sha512.oa.js";
export { ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.js";

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
