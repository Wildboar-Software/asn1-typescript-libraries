/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary CombinerAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CombinerAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{CombinerAlgorithms}}
 * ```
 */
export type CombinerAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_CombinerAlgorithmIdentifier: $.ASN1Decoder<CombinerAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CombinerAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CombinerAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_CombinerAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_CombinerAlgorithmIdentifier) {
        _cached_decoder_for_CombinerAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_CombinerAlgorithmIdentifier(el);
}


let _cached_encoder_for_CombinerAlgorithmIdentifier: $.ASN1Encoder<CombinerAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) CombinerAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CombinerAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CombinerAlgorithmIdentifier(
    value: CombinerAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<CombinerAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_CombinerAlgorithmIdentifier) {
        _cached_encoder_for_CombinerAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_CombinerAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
