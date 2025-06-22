/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthAttId,
    _decode_AuthAttId,
    _encode_AuthAttId,
} from "../AttributeCertificateDefinitions/AuthAttId.ta.mjs";
/**
 * @summary AuthorityAttributeIdentifierSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorityAttributeIdentifierSyntax  ::=  SEQUENCE SIZE (1..MAX) OF AuthAttId
 * ```
 */
export type AuthorityAttributeIdentifierSyntax = AuthAttId[]; // SequenceOfType

let _cached_decoder_for_AuthorityAttributeIdentifierSyntax: $.ASN1Decoder<AuthorityAttributeIdentifierSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityAttributeIdentifierSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityAttributeIdentifierSyntax} The decoded data structure.
 */
export function _decode_AuthorityAttributeIdentifierSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthorityAttributeIdentifierSyntax) {
        _cached_decoder_for_AuthorityAttributeIdentifierSyntax = $._decodeSequenceOf<AuthAttId>(
            () => _decode_AuthAttId
        );
    }
    return _cached_decoder_for_AuthorityAttributeIdentifierSyntax(el);
}

let _cached_encoder_for_AuthorityAttributeIdentifierSyntax: $.ASN1Encoder<AuthorityAttributeIdentifierSyntax> | null = null;

/**
 * @summary Encodes a(n) AuthorityAttributeIdentifierSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityAttributeIdentifierSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityAttributeIdentifierSyntax(
    value: AuthorityAttributeIdentifierSyntax,
    elGetter: $.ASN1Encoder<AuthorityAttributeIdentifierSyntax>
) {
    if (!_cached_encoder_for_AuthorityAttributeIdentifierSyntax) {
        _cached_encoder_for_AuthorityAttributeIdentifierSyntax = $._encodeSequenceOf<AuthAttId>(
            () => _encode_AuthAttId,
            $.DER
        );
    }
    return _cached_encoder_for_AuthorityAttributeIdentifierSyntax(
        value,
        elGetter
    );
}


/* eslint-enable */
