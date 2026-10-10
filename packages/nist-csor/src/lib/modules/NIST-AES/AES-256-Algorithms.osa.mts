/* eslint-disable */
import { type ALGORITHM } from "../NIST-AES/ALGORITHM.oca.mjs";
import { aes_256_CFB } from "../NIST-AES/aes-256-CFB.oa.mjs";
import { aes_256_CBC } from "../NIST-AES/aes-256-CBC.oa.mjs";
import { aes_256_ECB } from "../NIST-AES/aes-256-ECB.oa.mjs";
import { aes_256_OFB } from "../NIST-AES/aes-256-OFB.oa.mjs";

/**
 * @summary AES_256_Algorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-256-Algorithms ALGORITHM ::= {
 *    aes-256-ECB  |
 *    aes-256-CBC  |
 *    aes-256-OFB  |
 *    aes-256-CFB
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const AES_256_Algorithms: (ALGORITHM)[] = [ aes_256_ECB, aes_256_CBC, aes_256_OFB, aes_256_CFB, ];

/* eslint-enable */
