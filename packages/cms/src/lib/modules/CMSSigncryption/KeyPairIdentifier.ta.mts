/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax-2010/SignerIdentifier.ta.mjs";

/**
 * @summary KeyPairIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyPairIdentifier  ::=  SignerIdentifier
 * ```
 */
export type KeyPairIdentifier = SignerIdentifier; // DefinedType


let _cached_decoder_for_KeyPairIdentifier: $.ASN1Decoder<KeyPairIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyPairIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyPairIdentifier} The decoded data structure.
 */
export function _decode_KeyPairIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyPairIdentifier) {
        _cached_decoder_for_KeyPairIdentifier = _decode_SignerIdentifier;
    }
    return _cached_decoder_for_KeyPairIdentifier(el);
}


let _cached_encoder_for_KeyPairIdentifier: $.ASN1Encoder<KeyPairIdentifier> | null = null;


/**
 * @summary Encodes a(n) KeyPairIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyPairIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyPairIdentifier(
    value: KeyPairIdentifier,
    elGetter: $.ASN1Encoder<KeyPairIdentifier>
) {
    if (!_cached_encoder_for_KeyPairIdentifier) {
        _cached_encoder_for_KeyPairIdentifier = _encode_SignerIdentifier;
    }
    return _cached_encoder_for_KeyPairIdentifier(value, elGetter);
}


/* eslint-enable */
