/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MultipleIcvAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleIcvAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedIcvAlgorithms}}
 * ```
 */
export type MultipleIcvAlgo = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_MultipleIcvAlgo: $.ASN1Decoder<MultipleIcvAlgo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleIcvAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleIcvAlgo} The decoded data structure.
 */
export function _decode_MultipleIcvAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleIcvAlgo) {
        _cached_decoder_for_MultipleIcvAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleIcvAlgo(el);
}

let _cached_encoder_for_MultipleIcvAlgo: $.ASN1Encoder<MultipleIcvAlgo> | null = null;

/**
 * @summary Encodes a(n) MultipleIcvAlgo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleIcvAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleIcvAlgo(
    value: MultipleIcvAlgo,
    elGetter: $.ASN1Encoder<MultipleIcvAlgo>
) {
    if (!_cached_encoder_for_MultipleIcvAlgo) {
        _cached_encoder_for_MultipleIcvAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_MultipleIcvAlgo(value, elGetter);
}


/* eslint-enable */
