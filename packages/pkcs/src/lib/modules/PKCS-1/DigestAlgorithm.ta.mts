/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta.mjs";

/**
 * @summary DigestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithm  ::=  AlgorithmIdentifier {
 *     {PKCS1-v1-5DigestAlgorithms}
 * }
 * ```
 */
export type DigestAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_DigestAlgorithm: $.ASN1Decoder<DigestAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithm} The decoded data structure.
 */
export function _decode_DigestAlgorithm(el: _Element) {
    if (!_cached_decoder_for_DigestAlgorithm) {
        _cached_decoder_for_DigestAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestAlgorithm(el);
}


let _cached_encoder_for_DigestAlgorithm: $.ASN1Encoder<DigestAlgorithm> | null = null;


/**
 * @summary Encodes a(n) DigestAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_DigestAlgorithm(
    value: DigestAlgorithm,
    elGetter: $.ASN1Encoder<DigestAlgorithm>
) {
    if (!_cached_encoder_for_DigestAlgorithm) {
        _cached_encoder_for_DigestAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestAlgorithm(value, elGetter);
}


/* eslint-enable */
