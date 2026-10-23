/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary MasterKeyAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for the DBEKM master key algorithm
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterKeyAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{MasterKeyAlgorithms}}
 * ```
 */
export type MasterKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MasterKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterKeyAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_MasterKeyAlgorithmIdentifier: $.ASN1Decoder<MasterKeyAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MasterKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_MasterKeyAlgorithmIdentifier: $.ASN1Encoder<MasterKeyAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
