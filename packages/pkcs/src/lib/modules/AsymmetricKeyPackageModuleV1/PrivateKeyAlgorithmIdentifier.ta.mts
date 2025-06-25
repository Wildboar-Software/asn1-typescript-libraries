/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary PrivateKeyAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { PUBLIC-KEY,
 *                                     { PrivateKeyAlgorithms } }
 * ```
 */
export type PrivateKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_PrivateKeyAlgorithmIdentifier: $.ASN1Decoder<PrivateKeyAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_PrivateKeyAlgorithmIdentifier(el: _Element): PrivateKeyAlgorithmIdentifier {
    if (!_cached_decoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_decoder_for_PrivateKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PrivateKeyAlgorithmIdentifier(el);
}


let _cached_encoder_for_PrivateKeyAlgorithmIdentifier: $.ASN1Encoder<PrivateKeyAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) PrivateKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyAlgorithmIdentifier(
    value: PrivateKeyAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<PrivateKeyAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_PrivateKeyAlgorithmIdentifier) {
        _cached_encoder_for_PrivateKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PrivateKeyAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
