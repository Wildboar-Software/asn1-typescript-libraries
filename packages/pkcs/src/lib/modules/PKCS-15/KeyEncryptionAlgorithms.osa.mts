/* eslint-disable */
import { type ALGORITHM_IDENTIFIER } from "../PKCS-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { KeyEncryptionAlgorithms_Union0_Intersection0_Element } from "../PKCS-15/KeyEncryptionAlgorithms-Union0-Intersection0-Element.oa.mjs";
import { KeyEncryptionAlgorithms_Union1_Intersection0_Element } from "../PKCS-15/KeyEncryptionAlgorithms-Union1-Intersection0-Element.oa.mjs";


/**
 * @summary KeyEncryptionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     {NULL IDENTIFIED BY id-alg-CMS3DESwrap}
 *     | {INTEGER IDENTIFIED BY id-alg-CMSRC2wrap},
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const KeyEncryptionAlgorithms: ALGORITHM_IDENTIFIER<any>[] = [
    KeyEncryptionAlgorithms_Union0_Intersection0_Element,
    KeyEncryptionAlgorithms_Union1_Intersection0_Element,
];

/* eslint-enable */
