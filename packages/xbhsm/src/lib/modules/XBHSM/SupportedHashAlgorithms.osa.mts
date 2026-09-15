/* eslint-disable */
import { type ALGORITHM } from "../AuthenticationFramework/ALGORITHM.oca.mjs";

/**
 * @summary SupportedHashAlgorithms
 * @description
 *
 * Extensible `ALGORITHM` information-object set constraining
 * `HashAlgorithm`. The published module leaves the set empty
 * (`{...}`); implementations populate it with the hash
 * algorithms they support
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). Clause 8.1.2.2 requires a
 * "suitable hash function" but does not name one.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedHashAlgorithms    ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedHashAlgorithms: ALGORITHM[] = [];

/* eslint-enable */
