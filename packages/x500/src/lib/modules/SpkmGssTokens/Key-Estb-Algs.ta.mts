/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary Key_Estb_Algs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Key-Estb-Algs  ::=  SEQUENCE OF AlgorithmIdentifier{{SupportedAlgorithms}}
 * ```
 */
export type Key_Estb_Algs = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_Key_Estb_Algs: $.ASN1Decoder<Key_Estb_Algs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Key_Estb_Algs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Key_Estb_Algs} The decoded data structure.
 */
export function _decode_Key_Estb_Algs(el: _Element) {
    if (!_cached_decoder_for_Key_Estb_Algs) {
        _cached_decoder_for_Key_Estb_Algs = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_Key_Estb_Algs(el);
}

let _cached_encoder_for_Key_Estb_Algs: $.ASN1Encoder<Key_Estb_Algs> | null = null;

/**
 * @summary Encodes a(n) Key_Estb_Algs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Key_Estb_Algs, encoded as an ASN.1 Element.
 */
export function _encode_Key_Estb_Algs(
    value: Key_Estb_Algs,
    elGetter: $.ASN1Encoder<Key_Estb_Algs>
) {
    if (!_cached_encoder_for_Key_Estb_Algs) {
        _cached_encoder_for_Key_Estb_Algs = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_Key_Estb_Algs(value, elGetter);
}


/* eslint-enable */
