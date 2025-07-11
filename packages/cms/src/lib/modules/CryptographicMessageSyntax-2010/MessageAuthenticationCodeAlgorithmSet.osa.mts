/* eslint-disable */
import { type MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca.mjs";
import { MessageAuthAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/MessageAuthAlgs.osa.mjs";

/**
 * @summary MessageAuthenticationCodeAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithmSet MAC-ALGORITHM ::= { MessageAuthAlgs, ... }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const MessageAuthenticationCodeAlgorithmSet: MAC_ALGORITHM[] = [
    ...MessageAuthAlgs,
];

/* eslint-enable */
