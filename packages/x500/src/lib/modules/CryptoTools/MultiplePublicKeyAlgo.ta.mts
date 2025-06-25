/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub";
/**
 * @summary MultiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultiplePublicKeyAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo  AlgorithmIdentifier{{SupportedPublicKeyAlgorithms}}
 * ```
 */
export type MultiplePublicKeyAlgo = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_MultiplePublicKeyAlgo: $.ASN1Decoder<MultiplePublicKeyAlgo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultiplePublicKeyAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultiplePublicKeyAlgo} The decoded data structure.
 */
export function _decode_MultiplePublicKeyAlgo(el: _Element): MultiplePublicKeyAlgo {
    if (!_cached_decoder_for_MultiplePublicKeyAlgo) {
        _cached_decoder_for_MultiplePublicKeyAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultiplePublicKeyAlgo(el);
}

let _cached_encoder_for_MultiplePublicKeyAlgo: $.ASN1Encoder<MultiplePublicKeyAlgo> | null = null;

/**
 * @summary Encodes a(n) MultiplePublicKeyAlgo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultiplePublicKeyAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultiplePublicKeyAlgo(
    value: MultiplePublicKeyAlgo,
    elGetter: $.ASN1Encoder<MultiplePublicKeyAlgo>
): _Element {
    if (!_cached_encoder_for_MultiplePublicKeyAlgo) {
        _cached_encoder_for_MultiplePublicKeyAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_MultiplePublicKeyAlgo(value, elGetter);
}


/* eslint-enable */
