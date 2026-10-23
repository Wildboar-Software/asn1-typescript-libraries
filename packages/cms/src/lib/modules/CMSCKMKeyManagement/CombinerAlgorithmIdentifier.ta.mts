/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary CombinerAlgorithmIdentifier
 * @description
 *
 * AlgorithmIdentifier for the CKM combiner function (ITU-T X.894 | ISO/IEC 24824-4 Annex A.15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CombinerAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{CombinerAlgorithms}}
 * ```
 */
export type CombinerAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CombinerAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CombinerAlgorithmIdentifier} The decoded data structure.
 */
export const _decode_CombinerAlgorithmIdentifier: $.ASN1Decoder<CombinerAlgorithmIdentifier> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) CombinerAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CombinerAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_CombinerAlgorithmIdentifier: $.ASN1Encoder<CombinerAlgorithmIdentifier> = _encode_AlgorithmIdentifier;


/* eslint-enable */
