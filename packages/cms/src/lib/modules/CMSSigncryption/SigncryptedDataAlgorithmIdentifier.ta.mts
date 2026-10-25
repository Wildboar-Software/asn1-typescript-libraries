/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary SigncryptedDataAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for a signcryption algorithm (ISO/IEC 29150)
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedDataAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{SigncryptAlgorithms}}
 * ```
 */
export type SigncryptedDataAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedDataAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedDataAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_SigncryptedDataAlgorithmIdentifier: $.ASN1Decoder<SigncryptedDataAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) SigncryptedDataAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedDataAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_SigncryptedDataAlgorithmIdentifier: $.ASN1Encoder<SigncryptedDataAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
