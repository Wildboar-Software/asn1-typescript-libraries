/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MultipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleAuthenEncryptAlgo  ::=  SEQUENCE SIZE (1..MAX) OF
 *   algo       AlgorithmIdentifier{{SupportedAuthenEncryptAlgorithms}}
 * ```
 */
export type MultipleAuthenEncryptAlgo = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_MultipleAuthenEncryptAlgo: $.ASN1Decoder<MultipleAuthenEncryptAlgo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleAuthenEncryptAlgo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleAuthenEncryptAlgo} The decoded data structure.
 */
export function _decode_MultipleAuthenEncryptAlgo(el: _Element) {
    if (!_cached_decoder_for_MultipleAuthenEncryptAlgo) {
        _cached_decoder_for_MultipleAuthenEncryptAlgo = $._decodeSequenceOf<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
        );
    }
    return _cached_decoder_for_MultipleAuthenEncryptAlgo(el);
}

let _cached_encoder_for_MultipleAuthenEncryptAlgo: $.ASN1Encoder<MultipleAuthenEncryptAlgo> | null = null;

/**
 * @summary Encodes a(n) MultipleAuthenEncryptAlgo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleAuthenEncryptAlgo, encoded as an ASN.1 Element.
 */
export function _encode_MultipleAuthenEncryptAlgo(
    value: MultipleAuthenEncryptAlgo,
    elGetter: $.ASN1Encoder<MultipleAuthenEncryptAlgo>
) {
    if (!_cached_encoder_for_MultipleAuthenEncryptAlgo) {
        _cached_encoder_for_MultipleAuthenEncryptAlgo = $._encodeSequenceOf<AlgorithmIdentifier>(
            () => _encode_AlgorithmIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_MultipleAuthenEncryptAlgo(value, elGetter);
}


/* eslint-enable */
