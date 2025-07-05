/* eslint-disable */
import { type KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import { KeyWrapAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgs.osa.mjs";

/**
 * @summary KeyEncryptionAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithmSet KEY-WRAP ::= { KeyWrapAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_WRAP[]}
 *
 */
export const KeyEncryptionAlgorithmSet: KEY_WRAP[] = [...KeyWrapAlgs];

/* eslint-enable */
