/* eslint-disable */
import { AES_128_Algorithms } from "../NIST-AES/AES-128-Algorithms.osa.mjs";
// export { AES_128_Algorithms } from "../NIST-AES/AES-128-Algorithms.osa.mjs";
import { AES_192_Algorithms } from "../NIST-AES/AES-192-Algorithms.osa.mjs";
// export { AES_192_Algorithms } from "../NIST-AES/AES-192-Algorithms.osa.mjs";
import { AES_256_Algorithms } from "../NIST-AES/AES-256-Algorithms.osa.mjs";
// export { AES_256_Algorithms } from "../NIST-AES/AES-256-Algorithms.osa.mjs";


/**
 * @summary AES_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-Algorithms ALGORITHM ::= {
 *    AES-128-Algorithms  |
 *    AES-192-Algorithms  |
 *    AES-256-Algorithms,
 *    ...
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const AES_Algorithms: (ALGORITHM)[] = [ ...AES_128_Algorithms, ...AES_192_Algorithms, ...AES_256_Algorithms, ];

/* eslint-enable */
