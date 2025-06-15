/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBKDF2Algorithms } from "../PKCS5v2-1/PBKDF2Algorithms.osa.mjs";


/**
 * @summary KeyDerivationAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     PBKDF2Algorithms,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const KeyDerivationAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    ...PBKDF2Algorithms,
];

/* eslint-enable */
