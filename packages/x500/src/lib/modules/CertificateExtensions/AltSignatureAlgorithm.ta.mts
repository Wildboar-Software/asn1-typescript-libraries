/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary AltSignatureAlgorithm
 * @description
 *
 * AlgorithmIdentifier for the alternative signature. Pair with
 * `AltSignatureValue`; both or neither. Non-critical recommended — critical
 * would force every RP to understand the alt algorithm.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureAlgorithm  ::=  AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type AltSignatureAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltSignatureAlgorithm} The decoded data structure.
 */
export const _decode_AltSignatureAlgorithm: $.ASN1Decoder<AltSignatureAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) AltSignatureAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_AltSignatureAlgorithm: $.ASN1Encoder<AltSignatureAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
