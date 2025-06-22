/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary SignatureAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type SignatureAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType


let _cached_decoder_for_SignatureAlgorithmIdentifier: $.ASN1Decoder<SignatureAlgorithmIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignatureAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_SignatureAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_SignatureAlgorithmIdentifier) {
        _cached_decoder_for_SignatureAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SignatureAlgorithmIdentifier(el);
}


let _cached_encoder_for_SignatureAlgorithmIdentifier: $.ASN1Encoder<SignatureAlgorithmIdentifier> | null = null;


/**
 * @summary Encodes a(n) SignatureAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SignatureAlgorithmIdentifier(
    value: SignatureAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<SignatureAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_SignatureAlgorithmIdentifier) {
        _cached_encoder_for_SignatureAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SignatureAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
