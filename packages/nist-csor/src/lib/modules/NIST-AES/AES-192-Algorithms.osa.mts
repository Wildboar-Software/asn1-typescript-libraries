/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { aes_192_CFB } from "../NIST-AES/aes-192-CFB.oa.mjs";
import { aes_192_CBC } from "../NIST-AES/aes-192-CBC.oa.mjs";
import { aes_192_ECB } from "../NIST-AES/aes-192-ECB.oa.mjs";
import { aes_192_OFB } from "../NIST-AES/aes-192-OFB.oa.mjs";

/**
 * @summary AES_192_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-192-Algorithms ALGORITHM ::= {
 *    aes-192-ECB  |
 *    aes-192-CBC  |
 *    aes-192-OFB  |
 *    aes-192-CFB
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const AES_192_Algorithms: (ALGORITHM)[] = [ aes_192_ECB, aes_192_CBC, aes_192_OFB, aes_192_CFB, ];

/* eslint-enable */
