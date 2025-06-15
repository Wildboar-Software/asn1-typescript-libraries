/* eslint-disable */
import { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBMAC1Algorithms_Union0_Intersection0_Element } from "../PKCS5v2-1/PBMAC1Algorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PBMAC1Algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBMAC1Algorithms ALGORITHM-IDENTIFIER ::= {
 *     {PBMAC1-params IDENTIFIED BY id-PBMAC1},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBMAC1Algorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PBMAC1Algorithms_Union0_Intersection0_Element,
];

/* eslint-enable */
