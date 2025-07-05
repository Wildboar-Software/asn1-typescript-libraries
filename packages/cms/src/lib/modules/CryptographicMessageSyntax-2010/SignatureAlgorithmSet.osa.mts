/* eslint-disable */
import { type SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca.mjs";
import { SignatureAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/SignatureAlgs.osa.mjs";

/**
 * @summary SignatureAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgorithmSet SIGNATURE-ALGORITHM ::= { SignatureAlgs, ... }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM[]}
 *
 */
export const SignatureAlgorithmSet: SIGNATURE_ALGORITHM[] = [...SignatureAlgs];

/* eslint-enable */
