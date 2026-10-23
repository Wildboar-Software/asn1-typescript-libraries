/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary PSourceAlgorithm
 * @description
 *
 * AlgorithmIdentifier for OAEP P-source (typically pSpecified)
 * ([RFC 4055 §4.1](https://datatracker.ietf.org/doc/html/rfc4055#section-4.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSourceAlgorithm  ::=  AlgorithmIdentifier{ALGORITHM,{PSS-SourceAlgorithms}}
 * ```
 */
export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PSourceAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSourceAlgorithm} The decoded data structure.
 */
export const _decode_PSourceAlgorithm: $.ASN1Decoder<PSourceAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) PSourceAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSourceAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_PSourceAlgorithm: $.ASN1Encoder<PSourceAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
