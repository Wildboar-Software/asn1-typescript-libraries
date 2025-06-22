/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RevokedGroup,
    _decode_RevokedGroup,
    _encode_RevokedGroup,
} from "../CertificateExtensions/RevokedGroup.ta.mjs";
/**
 * @summary RevokedGroupsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevokedGroupsSyntax  ::=  SEQUENCE SIZE (1..MAX) OF RevokedGroup
 * ```
 */
export type RevokedGroupsSyntax = RevokedGroup[]; // SequenceOfType

let _cached_decoder_for_RevokedGroupsSyntax: $.ASN1Decoder<RevokedGroupsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevokedGroupsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevokedGroupsSyntax} The decoded data structure.
 */
export function _decode_RevokedGroupsSyntax(el: _Element) {
    if (!_cached_decoder_for_RevokedGroupsSyntax) {
        _cached_decoder_for_RevokedGroupsSyntax = $._decodeSequenceOf<RevokedGroup>(
            () => _decode_RevokedGroup
        );
    }
    return _cached_decoder_for_RevokedGroupsSyntax(el);
}

let _cached_encoder_for_RevokedGroupsSyntax: $.ASN1Encoder<RevokedGroupsSyntax> | null = null;

/**
 * @summary Encodes a(n) RevokedGroupsSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevokedGroupsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RevokedGroupsSyntax(
    value: RevokedGroupsSyntax,
    elGetter: $.ASN1Encoder<RevokedGroupsSyntax>
) {
    if (!_cached_encoder_for_RevokedGroupsSyntax) {
        _cached_encoder_for_RevokedGroupsSyntax = $._encodeSequenceOf<RevokedGroup>(
            () => _encode_RevokedGroup,
            $.DER
        );
    }
    return _cached_encoder_for_RevokedGroupsSyntax(value, elGetter);
}


/* eslint-enable */
