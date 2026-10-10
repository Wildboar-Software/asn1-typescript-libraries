/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { aes_128_CFB } from "../NIST-AES/aes-128-CFB.oa.mjs";
import { aes_128_CBC } from "../NIST-AES/aes-128-CBC.oa.mjs";
import { aes_128_ECB } from "../NIST-AES/aes-128-ECB.oa.mjs";
import { aes_128_OFB } from "../NIST-AES/aes-128-OFB.oa.mjs";

/**
 * @summary AES_128_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-128-Algorithms ALGORITHM ::= {
 *    aes-128-ECB  |
 *    aes-128-CBC  |
 *    aes-128-OFB  |
 *    aes-128-CFB
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const AES_128_Algorithms: (ALGORITHM)[] = [ aes_128_ECB, aes_128_CBC, aes_128_OFB, aes_128_CFB, ];

/* eslint-enable */
