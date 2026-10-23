/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS-1/AlgorithmIdentifier.ta.mjs";

/**
 * @summary MaskGenAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaskGenAlgorithm  ::=  AlgorithmIdentifier { {PKCS1MGFAlgorithms} }
 * ```
 */
export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_MaskGenAlgorithm: $.ASN1Decoder<MaskGenAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MaskGenAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaskGenAlgorithm} The decoded data structure.
 */
export function _decode_MaskGenAlgorithm(el: _Element): MaskGenAlgorithm {
    if (!_cached_decoder_for_MaskGenAlgorithm) {
        _cached_decoder_for_MaskGenAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MaskGenAlgorithm(el);
}


let _cached_encoder_for_MaskGenAlgorithm: $.ASN1Encoder<MaskGenAlgorithm> | null = null;


/**
 * @summary Encodes a(n) MaskGenAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaskGenAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_MaskGenAlgorithm(
    value: MaskGenAlgorithm,
    elGetter: $.ASN1Encoder<MaskGenAlgorithm>
): _Element {
    if (!_cached_encoder_for_MaskGenAlgorithm) {
        _cached_encoder_for_MaskGenAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MaskGenAlgorithm(value, elGetter);
}


/* eslint-enable */
