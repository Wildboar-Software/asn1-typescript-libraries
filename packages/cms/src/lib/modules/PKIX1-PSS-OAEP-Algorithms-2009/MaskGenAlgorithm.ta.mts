/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary MaskGenAlgorithm
 * @description
 *
 * AlgorithmIdentifier for a mask generation function (typically MGF1)
 * ([RFC 4055 §2.2](https://datatracker.ietf.org/doc/html/rfc4055#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaskGenAlgorithm  ::=  AlgorithmIdentifier{ALGORITHM,{PKCS1MGFAlgorithms}}
 * ```
 */
export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MaskGenAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaskGenAlgorithm} The decoded data structure.
 */
export const _decode_MaskGenAlgorithm: $.ASN1Decoder<MaskGenAlgorithm> = _decode_AlgorithmIdentifier;

/**
 * @summary Encodes a(n) MaskGenAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaskGenAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_MaskGenAlgorithm: $.ASN1Encoder<MaskGenAlgorithm> = _encode_AlgorithmIdentifier;


/* eslint-enable */
