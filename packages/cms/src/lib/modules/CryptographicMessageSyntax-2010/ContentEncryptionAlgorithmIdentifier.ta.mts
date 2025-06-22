/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";

/**
 * @summary ContentEncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {CONTENT-ENCRYPTION, {ContentEncryptionAlgorithmSet}}
 * ```
 */
export type ContentEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_ContentEncryptionAlgorithmIdentifier: $.ASN1Decoder<ContentEncryptionAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ContentEncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentEncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ContentEncryptionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_ContentEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentEncryptionAlgorithmIdentifier(el);
}


let _cached_encoder_for_ContentEncryptionAlgorithmIdentifier: $.ASN1Encoder<ContentEncryptionAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) ContentEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentEncryptionAlgorithmIdentifier(
    value: ContentEncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ContentEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ContentEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_ContentEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
