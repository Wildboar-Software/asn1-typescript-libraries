/* eslint-disable */
import { type ALGORITHM } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary SigncryptAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptAlgorithms ALGORITHM ::= {
 * SigncryptionMechanism, -- ISO/IEC 29150 Signcryption --
 * ...  -- Expect additional algorithm objects --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SigncryptAlgorithms: ALGORITHM[] = [
    // Commented out because this comes from the `Signcryption` module, which comes from the proprietary ISO/IEC 29150.
    // ...SigncryptionMechanism,
];

/* eslint-enable */
