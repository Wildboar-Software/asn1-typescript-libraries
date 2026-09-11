/* eslint-disable */
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary PSIDEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSIDEncryptionAlgorithm  ::=  AlgorithmIdentifier
 *         {{SupportedEncryptionAlgorithms}}
 * ```
 */
export type PSIDEncryptionAlgorithm = AlgorithmIdentifier; // DefinedType
export const _decode_PSIDEncryptionAlgorithm: typeof _decode_AlgorithmIdentifier = _decode_AlgorithmIdentifier;
export const _encode_PSIDEncryptionAlgorithm: typeof _encode_AlgorithmIdentifier = _encode_AlgorithmIdentifier;

/* eslint-enable */
