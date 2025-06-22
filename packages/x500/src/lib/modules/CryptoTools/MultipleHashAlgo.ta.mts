/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MultipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleHashAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedHashAlgorithms}}
 * ```
 */
export type MultipleHashAlgo = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_MultipleHashAlgo: $.ASN1Decoder<MultipleHashAlgo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleHashAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleHashAlgo} The decoded data structure.
 */
export function _decode_MultipleHashAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleHashAlgo) {
        _cached_decoder_for_MultipleHashAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleHashAlgo(el);
}

let _cached_encoder_for_MultipleHashAlgo: $.ASN1Encoder<MultipleHashAlgo> | null = null;

/**
 * @summary Encodes a(n) MultipleHashAlgo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleHashAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleHashAlgo(
    value: MultipleHashAlgo,
    elGetter: $.ASN1Encoder<MultipleHashAlgo>
) {
    if (!_cached_encoder_for_MultipleHashAlgo) {
        _cached_encoder_for_MultipleHashAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_MultipleHashAlgo(value, elGetter);
}


/* eslint-enable */
