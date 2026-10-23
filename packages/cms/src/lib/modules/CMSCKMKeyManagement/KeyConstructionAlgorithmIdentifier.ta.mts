/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary KeyConstructionAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for a CKM key-construction algorithm
 * (ITU-T X.894 | ISO/IEC 24824-4 Annex A.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{KeyConstructionAlgorithms}}
 * ```
 */
export type KeyConstructionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_KeyConstructionAlgorithmIdentifier: $.ASN1Decoder<KeyConstructionAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) KeyConstructionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_KeyConstructionAlgorithmIdentifier: $.ASN1Encoder<KeyConstructionAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
