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
 * `AlgorithmIdentifier` constrained to
 * `SupportedHashAlgorithms`. Hash algorithm and parameters
 * used to generate a PSID
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). Clause 8.1.2.2 requires a
 * "suitable hash function" but does not name one.
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
