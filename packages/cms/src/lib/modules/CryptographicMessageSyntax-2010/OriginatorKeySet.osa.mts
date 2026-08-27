/* eslint-disable */
import { type PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { KeyAgreePublicKeys } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreePublicKeys.osa.mjs";

/**
 * @summary OriginatorKeySet
 * @description
 *
 * Object set of public-key algorithms usable as originator keys in key
 * agreement ([RFC 6268](https://datatracker.ietf.org/doc/html/rfc6268)).
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
