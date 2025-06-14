/* eslint-disable */
import { ContentEncryptionAlgorithms_Union0_Intersection0_Exclusion } from "../PKCS-15/ContentEncryptionAlgorithms-Union0-Intersection0-Exclusion.oa.mjs";
import type { ALGORITHM_IDENTIFIER } from "../PKCS5v2-1/ALGORITHM-IDENTIFIER.oca.mjs";
import { SupportingAlgorithms } from "../PKCS5v2-1/SupportingAlgorithms.osa.mjs";


/**
 * @summary ContentEncryptionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithms ALGORITHM-IDENTIFIER ::= {
 *     SupportingAlgorithms EXCEPT {NULL IDENTIFIED BY id-hmacWithSHA1}, -- SupportingAlgorithms are defined in PKCS #5 v2
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM_IDENTIFIER[]}
 *
 */
export const ContentEncryptionAlgorithms: ALGORITHM_IDENTIFIER<any>[] = Array.from(
    (() => {
        const _nx = new Set([...SupportingAlgorithms]);
        [ContentEncryptionAlgorithms_Union0_Intersection0_Exclusion].forEach(
            (_x) => {
                _nx.delete(_x);
            }
        );
        return _nx;
    })()
);

/* eslint-enable */
