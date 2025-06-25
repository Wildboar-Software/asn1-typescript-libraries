/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary MessageAuthenticationCodeAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithm  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageAuthenticationCodeAlgorithm = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_MessageAuthenticationCodeAlgorithm: $.ASN1Decoder<MessageAuthenticationCodeAlgorithm> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCodeAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCodeAlgorithm} The decoded data structure.
 */
export function _decode_MessageAuthenticationCodeAlgorithm(el: _Element): MessageAuthenticationCodeAlgorithm {
    if (!_cached_decoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_decoder_for_MessageAuthenticationCodeAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageAuthenticationCodeAlgorithm(el);
}


let _cached_encoder_for_MessageAuthenticationCodeAlgorithm: $.ASN1Encoder<MessageAuthenticationCodeAlgorithm> | null = null;


/**
 * @summary Encodes a(n) MessageAuthenticationCodeAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCodeAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_MessageAuthenticationCodeAlgorithm(
    value: MessageAuthenticationCodeAlgorithm,
    elGetter: $.ASN1Encoder<MessageAuthenticationCodeAlgorithm>
): _Element {
    if (!_cached_encoder_for_MessageAuthenticationCodeAlgorithm) {
        _cached_encoder_for_MessageAuthenticationCodeAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageAuthenticationCodeAlgorithm(
        value,
        elGetter
    );
}


/* eslint-enable */
