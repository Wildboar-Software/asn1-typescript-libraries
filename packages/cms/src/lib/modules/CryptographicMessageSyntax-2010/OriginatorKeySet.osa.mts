/* eslint-disable */
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { KeyAgreePublicKeys } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreePublicKeys.osa.mjs";

/**
 * @summary OriginatorKeySet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorKeySet PUBLIC-KEY ::= { KeyAgreePublicKeys, ... }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const OriginatorKeySet: PUBLIC_KEY[] = [...KeyAgreePublicKeys];

/* eslint-enable */
