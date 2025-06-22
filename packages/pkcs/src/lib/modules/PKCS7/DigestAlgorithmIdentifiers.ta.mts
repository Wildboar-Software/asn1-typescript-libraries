/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../PKCS7/DigestAlgorithmIdentifier.ta.mjs";

/**
 * @summary DigestAlgorithmIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigestAlgorithmIdentifiers  ::=  SET OF DigestAlgorithmIdentifier
 * ```
 */
export type DigestAlgorithmIdentifiers = DigestAlgorithmIdentifier[]; // SetOfType


let _cached_decoder_for_DigestAlgorithmIdentifiers: $.ASN1Decoder<DigestAlgorithmIdentifiers> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DigestAlgorithmIdentifiers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigestAlgorithmIdentifiers} The decoded data structure.
 */
export function _decode_DigestAlgorithmIdentifiers(el: _Element) {
    if (!_cached_decoder_for_DigestAlgorithmIdentifiers) {
        _cached_decoder_for_DigestAlgorithmIdentifiers = $._decodeSetOf<DigestAlgorithmIdentifier>(
            () => _decode_DigestAlgorithmIdentifier
        );
    }
    return _cached_decoder_for_DigestAlgorithmIdentifiers(el);
}


let _cached_encoder_for_DigestAlgorithmIdentifiers: $.ASN1Encoder<DigestAlgorithmIdentifiers> | null = null;


/**
 * @summary Encodes a(n) DigestAlgorithmIdentifiers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestAlgorithmIdentifiers, encoded as an ASN.1 Element.
 */
export function _encode_DigestAlgorithmIdentifiers(
    value: DigestAlgorithmIdentifiers,
    elGetter: $.ASN1Encoder<DigestAlgorithmIdentifiers>
) {
    if (!_cached_encoder_for_DigestAlgorithmIdentifiers) {
        _cached_encoder_for_DigestAlgorithmIdentifiers = $._encodeSetOf<DigestAlgorithmIdentifier>(
            () => _encode_DigestAlgorithmIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_DigestAlgorithmIdentifiers(value, elGetter);
}


/* eslint-enable */
