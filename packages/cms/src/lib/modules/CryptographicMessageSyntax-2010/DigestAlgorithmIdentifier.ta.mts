/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary DigestAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {DIGEST-ALGORITHM, {DigestAlgorithmSet}}
 * ```
 */
export type DigestAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_DigestAlgorithmIdentifier: $.ASN1Decoder<DigestAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_DigestAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_DigestAlgorithmIdentifier) {
        _cached_decoder_for_DigestAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_DigestAlgorithmIdentifier(el);
}


let _cached_encoder_for_DigestAlgorithmIdentifier: $.ASN1Encoder<DigestAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) DigestAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_DigestAlgorithmIdentifier(
    value: DigestAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<DigestAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_DigestAlgorithmIdentifier) {
        _cached_encoder_for_DigestAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_DigestAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
