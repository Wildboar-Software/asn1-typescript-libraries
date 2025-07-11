/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { MACAlgorithms_Union0_Intersection0_Element } from "../PKCS-15/MACAlgorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary MACAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY hMAC-SHA1},
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const MACAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    MACAlgorithms_Union0_Intersection0_Element,
];

/* eslint-enable */
