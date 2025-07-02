/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary KeyWrapAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapAlgorithm  ::=  AlgorithmIdentifier {KEY-WRAP, {KeyWrapAlgs }}
 * ```
 */
export type KeyWrapAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_KeyWrapAlgorithm: $.ASN1Decoder<KeyWrapAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyWrapAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyWrapAlgorithm} The decoded data structure.
 */
export function _decode_KeyWrapAlgorithm(el: _Element): KeyWrapAlgorithm {
    if (!_cached_decoder_for_KeyWrapAlgorithm) {
        _cached_decoder_for_KeyWrapAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyWrapAlgorithm(el);
}


let _cached_encoder_for_KeyWrapAlgorithm: $.ASN1Encoder<KeyWrapAlgorithm> | null = null;


/**
 * @summary Encodes a(n) KeyWrapAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyWrapAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_KeyWrapAlgorithm(
    value: KeyWrapAlgorithm,
    elGetter: $.ASN1Encoder<KeyWrapAlgorithm>
): _Element {
    if (!_cached_encoder_for_KeyWrapAlgorithm) {
        _cached_encoder_for_KeyWrapAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyWrapAlgorithm(value, elGetter);
}


/* eslint-enable */
