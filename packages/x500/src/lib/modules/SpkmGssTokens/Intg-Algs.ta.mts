/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary Intg_Algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Intg-Algs  ::=  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type Intg_Algs = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_Intg_Algs: $.ASN1Decoder<Intg_Algs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Intg_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Intg_Algs} The decoded data structure.
 */
export function _decode_Intg_Algs(el: _Element) {
    if (!_cached_decoder_for_Intg_Algs) {
        _cached_decoder_for_Intg_Algs = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_Intg_Algs(el);
}

let _cached_encoder_for_Intg_Algs: $.ASN1Encoder<Intg_Algs> | null = null;

/**
 * @summary Encodes a(n) Intg_Algs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Intg_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Intg_Algs(
    value: Intg_Algs,
    elGetter: $.ASN1Encoder<Intg_Algs>
) {
    if (!_cached_encoder_for_Intg_Algs) {
        _cached_encoder_for_Intg_Algs = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_Intg_Algs(value, elGetter);
}


/* eslint-enable */
