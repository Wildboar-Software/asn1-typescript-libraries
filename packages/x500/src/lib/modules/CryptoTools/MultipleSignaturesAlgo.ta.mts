/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MultipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleSignaturesAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedSignatureAlgorithms}}
 * ```
 */
export type MultipleSignaturesAlgo = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_MultipleSignaturesAlgo: $.ASN1Decoder<MultipleSignaturesAlgo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleSignaturesAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleSignaturesAlgo} The decoded data structure.
 */
export function _decode_MultipleSignaturesAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleSignaturesAlgo) {
        _cached_decoder_for_MultipleSignaturesAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleSignaturesAlgo(el);
}

let _cached_encoder_for_MultipleSignaturesAlgo: $.ASN1Encoder<MultipleSignaturesAlgo> | null = null;

/**
 * @summary Encodes a(n) MultipleSignaturesAlgo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleSignaturesAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleSignaturesAlgo(
    value: MultipleSignaturesAlgo,
    elGetter: $.ASN1Encoder<MultipleSignaturesAlgo>
) {
    if (!_cached_encoder_for_MultipleSignaturesAlgo) {
        _cached_encoder_for_MultipleSignaturesAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_MultipleSignaturesAlgo(value, elGetter);
}


/* eslint-enable */
