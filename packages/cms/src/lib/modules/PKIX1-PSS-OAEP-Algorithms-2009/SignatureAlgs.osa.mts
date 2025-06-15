/* eslint-disable */
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { sa_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/sa-rsaSSA-PSS.oa.mjs";

/**
 * @summary SignatureAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgs SIGNATURE-ALGORITHM ::= { sa-rsaSSA-PSS, ...}
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM[]}
 *
 */
export const SignatureAlgs: SIGNATURE_ALGORITHM[] = [sa_rsaSSA_PSS];

/* eslint-enable */
