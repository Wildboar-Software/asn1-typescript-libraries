/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBKDF2Algorithms_Union0_Intersection0_Element } from "../PKCS5v2-1/PBKDF2Algorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PBKDF2Algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2Algorithms ALGORITHM-IDENTIFIER ::= {
 *     {PBKDF2-params IDENTIFIED BY id-PBKDF2},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBKDF2Algorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PBKDF2Algorithms_Union0_Intersection0_Element,
];

/* eslint-enable */
