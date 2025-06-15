/* eslint-disable */
import { pkcs15_alg_null } from "../PKCS-15/pkcs15-alg-null.oa.mjs";
import { PKCS15_ALGORITHM } from "../PKCS-15/PKCS15-ALGORITHM.oca.mjs";

/**
 * @summary AlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmSet PKCS15-ALGORITHM ::= {
 *     pkcs15-alg-null,
 *     ... -- See PKCS #11 for values for the &id field (and parameters)
 * }
 * ```
 *
 * @constant
 * @type {PKCS15_ALGORITHM[]}
 *
 */
export const AlgorithmSet: PKCS15_ALGORITHM[] = [pkcs15_alg_null];

/* eslint-enable */
