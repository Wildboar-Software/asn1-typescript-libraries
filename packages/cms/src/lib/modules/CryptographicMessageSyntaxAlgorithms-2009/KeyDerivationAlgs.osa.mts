/* eslint-disable */
import { type KEY_DERIVATION } from "../AlgorithmInformation-2009/KEY-DERIVATION.oca.mjs";
import { kda_PBKDF2 } from "../CryptographicMessageSyntaxAlgorithms-2009/kda-PBKDF2.oa.mjs";

/**
 * @summary KeyDerivationAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgs KEY-DERIVATION ::= { kda-PBKDF2, ... }
 * ```
 *
 * @constant
 * @type {KEY_DERIVATION[]}
 *
 */
export const KeyDerivationAlgs: KEY_DERIVATION[] = [kda_PBKDF2];

/* eslint-enable */
