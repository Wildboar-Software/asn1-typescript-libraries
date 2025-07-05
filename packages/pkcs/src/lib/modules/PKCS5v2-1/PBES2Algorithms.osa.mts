/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBES2Algorithms_Union0_Intersection0_Element } from "../PKCS5v2-1/PBES2Algorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PBES2Algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2Algorithms ALGORITHM-IDENTIFIER ::= {
 *     {PBES2-params IDENTIFIED BY id-PBES2},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBES2Algorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PBES2Algorithms_Union0_Intersection0_Element,
];

/* eslint-enable */
