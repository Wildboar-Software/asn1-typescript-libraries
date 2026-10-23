/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-62/AlgorithmIdentifier.ta.mjs";
/**
 * @summary ECPKAlgorithm
 * @description
 *
 * AlgorithmIdentifier constrained to `ECPKAlgorithms`. Later
 * profile of the algorithm field of `SubjectPublicKeyInfo`. ANSI
 * X9.62-1998 §6.4 used `AlgorithmIdentifier {{ECPKAlgorithms}}`
 * with only `ecPublicKeyType`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPKAlgorithm  ::=  AlgorithmIdentifier {{ ECPKAlgorithms}}
 * ```
 */
export type ECPKAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ECPKAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPKAlgorithm} The decoded data structure.
 */
export const _decode_ECPKAlgorithm: $.ASN1Decoder<ECPKAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) ECPKAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPKAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_ECPKAlgorithm: $.ASN1Encoder<ECPKAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
