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
 * `AlgorithmIdentifier` constrained to
 * `SupportedEncryptionAlgorithms`. Asymmetric algorithm (and
 * parameters) used to encrypt the PSID; should match the
 * algorithm in the CA's certificate
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 clause 8.3). The encryption key is taken
 * from the CA's key-distribution certificate (clause 8.1.3).
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
