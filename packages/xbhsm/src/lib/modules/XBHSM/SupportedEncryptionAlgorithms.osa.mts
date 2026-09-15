/* eslint-disable */
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";

/**
 * @summary SupportedEncryptionAlgorithms
 * @description
 *
 * Extensible `ALGORITHM` information-object set constraining
 * `PSIDEncryptionAlgorithm`. The published module leaves the
 * set empty (`{...}`); implementations populate it with the
 * algorithms they support
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). Clause 6.3 allows RSA or other
 * asymmetric schemes that support encryption/decryption but
 * does not enumerate OIDs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedEncryptionAlgorithms    ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedEncryptionAlgorithms: ALGORITHM[] = [];

/* eslint-enable */
