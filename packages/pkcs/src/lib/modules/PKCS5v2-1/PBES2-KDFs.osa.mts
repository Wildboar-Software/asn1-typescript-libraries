/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBES2_KDFs_Union0_Intersection0_Element } from "../PKCS5v2-1/PBES2-KDFs-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PBES2_KDFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2-KDFs ALGORITHM-IDENTIFIER ::= {
 *     {PBKDF2-params IDENTIFIED BY id-PBKDF2},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBES2_KDFs: ALGORITHM_IDENTIFIER<any>[] = [
    PBES2_KDFs_Union0_Intersection0_Element,
];

/* eslint-enable */
