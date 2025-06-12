/* eslint-disable */
import { DIGEST_ALGORITHM } from "@wildboar/cms/src/lib/modules/AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.js";
import { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.js";

/* START_OF_SYMBOL_DEFINITION DigestAlgorithms */
/**
 * @summary DigestAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithms DIGEST-ALGORITHM ::= {
 *     mda-sha1, ...
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const DigestAlgorithms: DIGEST_ALGORITHM[] = [mda_sha1];
/* END_OF_SYMBOL_DEFINITION DigestAlgorithms */

/* eslint-enable */
