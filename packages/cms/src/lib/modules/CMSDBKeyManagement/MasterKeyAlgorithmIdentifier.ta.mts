/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary MasterKeyAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterKeyAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{MasterKeyAlgorithms}}
 * ```
 */
export type MasterKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_MasterKeyAlgorithmIdentifier: $.ASN1Decoder<MasterKeyAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MasterKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterKeyAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_MasterKeyAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_decoder_for_MasterKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MasterKeyAlgorithmIdentifier(el);
}


let _cached_encoder_for_MasterKeyAlgorithmIdentifier: $.ASN1Encoder<MasterKeyAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) MasterKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MasterKeyAlgorithmIdentifier(
    value: MasterKeyAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<MasterKeyAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_encoder_for_MasterKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MasterKeyAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
