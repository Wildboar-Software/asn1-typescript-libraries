/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary KeyDerivationAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {KEY-DERIVATION, {KeyDerivationAlgs, ...}}
 * ```
 */
export type KeyDerivationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_KeyDerivationAlgorithmIdentifier: $.ASN1Decoder<KeyDerivationAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_KeyDerivationAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyDerivationAlgorithmIdentifier) {
        _cached_decoder_for_KeyDerivationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyDerivationAlgorithmIdentifier(el);
}


let _cached_encoder_for_KeyDerivationAlgorithmIdentifier: $.ASN1Encoder<KeyDerivationAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) KeyDerivationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyDerivationAlgorithmIdentifier(
    value: KeyDerivationAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<KeyDerivationAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyDerivationAlgorithmIdentifier) {
        _cached_encoder_for_KeyDerivationAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyDerivationAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
