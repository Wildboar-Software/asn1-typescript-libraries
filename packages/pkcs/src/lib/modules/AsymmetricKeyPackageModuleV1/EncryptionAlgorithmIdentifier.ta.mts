/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary EncryptionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionAlgorithmIdentifier  ::=  AlgorithmIdentifier
 *                                     { CONTENT-ENCRYPTION,
 *                                         { KeyEncryptionAlgorithms } }
 * ```
 */
export type EncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_EncryptionAlgorithmIdentifier: $.ASN1Decoder<EncryptionAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_EncryptionAlgorithmIdentifier(el: _Element): EncryptionAlgorithmIdentifier {
    if (!_cached_decoder_for_EncryptionAlgorithmIdentifier) {
        _cached_decoder_for_EncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_EncryptionAlgorithmIdentifier(el);
}


let _cached_encoder_for_EncryptionAlgorithmIdentifier: $.ASN1Encoder<EncryptionAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) EncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_EncryptionAlgorithmIdentifier(
    value: EncryptionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<EncryptionAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_EncryptionAlgorithmIdentifier) {
        _cached_encoder_for_EncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_EncryptionAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
