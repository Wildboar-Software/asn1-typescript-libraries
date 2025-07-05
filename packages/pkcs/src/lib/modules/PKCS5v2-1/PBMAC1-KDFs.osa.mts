/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PBMAC1_KDFs_Union0_Intersection0_Element } from "../PKCS5v2-1/PBMAC1-KDFs-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PBMAC1_KDFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBMAC1-KDFs ALGORITHM-IDENTIFIER ::= {
 *     {PBKDF2-params IDENTIFIED BY id-PBKDF2},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PBMAC1_KDFs: ALGORITHM_IDENTIFIER<any>[] = [
    PBMAC1_KDFs_Union0_Intersection0_Element,
];

/* eslint-enable */
