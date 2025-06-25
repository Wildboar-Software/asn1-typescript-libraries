/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary MessageAuthenticationCodeAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Decoder<MessageAuthenticationCodeAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_MessageAuthenticationCodeAlgorithmIdentifier(
    el: _Element
): MessageAuthenticationCodeAlgorithmIdentifier {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithmIdentifier(el);
}


let _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier: $.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageAuthenticationCodeAlgorithmIdentifier(
    value: MessageAuthenticationCodeAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<MessageAuthenticationCodeAlgorithmIdentifier>
): _Element {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithmIdentifier(
        value,
        elGetter
    );
}


/* eslint-enable */
