/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { PKCS1PSourceAlgorithms_Union0_Intersection0_Element } from "../PKCS-1/PKCS1PSourceAlgorithms-Union0-Intersection0-Element.oa.mjs";


/**
 * @summary PKCS1PSourceAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1PSourceAlgorithms    ALGORITHM-IDENTIFIER ::= {
 *     { OID id-pSpecified PARAMETERS EncodingParameters },
 *     ...  -- Allows for future expansion --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const PKCS1PSourceAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    PKCS1PSourceAlgorithms_Union0_Intersection0_Element,
];

/* eslint-enable */
