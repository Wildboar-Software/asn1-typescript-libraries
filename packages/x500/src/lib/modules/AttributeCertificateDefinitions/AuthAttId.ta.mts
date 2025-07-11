/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta.mjs";
/**
 * @summary AuthAttId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttId  ::=  IssuerSerial
 * ```
 */
export type AuthAttId = IssuerSerial; // DefinedType

let _cached_decoder_for_AuthAttId: $.ASN1Decoder<AuthAttId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttId} The decoded data structure.
 */
export function _decode_AuthAttId(el: _Element): AuthAttId {
    if (!_cached_decoder_for_AuthAttId) {
        _cached_decoder_for_AuthAttId = _decode_IssuerSerial;
    }
    return _cached_decoder_for_AuthAttId(el);
}

let _cached_encoder_for_AuthAttId: $.ASN1Encoder<AuthAttId> | null = null;

/**
 * @summary Encodes a(n) AuthAttId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttId, encoded as an ASN.1 Element.
 */
export function _encode_AuthAttId(
    value: AuthAttId,
    elGetter: $.ASN1Encoder<AuthAttId>
): _Element {
    if (!_cached_encoder_for_AuthAttId) {
        _cached_encoder_for_AuthAttId = _encode_IssuerSerial;
    }
    return _cached_encoder_for_AuthAttId(value, elGetter);
}


/* eslint-enable */
