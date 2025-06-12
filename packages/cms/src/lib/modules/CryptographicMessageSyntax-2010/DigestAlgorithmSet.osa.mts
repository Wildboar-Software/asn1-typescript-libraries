/* eslint-disable */
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { MessageDigestAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/MessageDigestAlgs.osa.mjs";

/* START_OF_SYMBOL_DEFINITION DigestAlgorithmSet */
/**
 * @summary DigestAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmSet DIGEST-ALGORITHM ::= {
 * CryptographicMessageSyntaxAlgorithms-2009.MessageDigestAlgs, ... }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const DigestAlgorithmSet: DIGEST_ALGORITHM[] = [
    ...MessageDigestAlgs,
];
/* END_OF_SYMBOL_DEFINITION DigestAlgorithmSet */

/* eslint-enable */
