/* eslint-disable */
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary HashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithm  ::=  AlgorithmIdentifier{{SupportedHashAlgorithms}}
 * ```
 */
export type HashAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_HashAlgorithm: typeof _decode_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_HashAlgorithm: typeof _encode_AlgorithmIdentifier = _encode_AlgorithmIdentifier;

/* eslint-enable */
