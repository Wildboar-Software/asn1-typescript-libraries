/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ToBeRevokedGroup,
    _decode_ToBeRevokedGroup,
    _encode_ToBeRevokedGroup,
} from "../CertificateExtensions/ToBeRevokedGroup.ta.mjs";
/**
 * @summary ToBeRevokedSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeRevokedSyntax  ::=  SEQUENCE SIZE (1..MAX) OF ToBeRevokedGroup
 * ```
 */
export type ToBeRevokedSyntax = ToBeRevokedGroup[]; // SequenceOfType

let _cached_decoder_for_ToBeRevokedSyntax: $.ASN1Decoder<ToBeRevokedSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ToBeRevokedSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeRevokedSyntax} The decoded data structure.
 */
export function _decode_ToBeRevokedSyntax(el: _Element): ToBeRevokedSyntax {
    if (!_cached_decoder_for_ToBeRevokedSyntax) {
        _cached_decoder_for_ToBeRevokedSyntax = $._decodeSequenceOf<ToBeRevokedGroup>(
            () => _decode_ToBeRevokedGroup
        );
    }
    return _cached_decoder_for_ToBeRevokedSyntax(el);
}

let _cached_encoder_for_ToBeRevokedSyntax: $.ASN1Encoder<ToBeRevokedSyntax> | null = null;

/**
 * @summary Encodes a(n) ToBeRevokedSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeRevokedSyntax, encoded as an ASN.1 Element.
 */
export function _encode_ToBeRevokedSyntax(
    value: ToBeRevokedSyntax,
    elGetter: $.ASN1Encoder<ToBeRevokedSyntax>
): _Element {
    if (!_cached_encoder_for_ToBeRevokedSyntax) {
        _cached_encoder_for_ToBeRevokedSyntax = $._encodeSequenceOf<ToBeRevokedGroup>(
            () => _encode_ToBeRevokedGroup,
            $.DER
        );
    }
    return _cached_encoder_for_ToBeRevokedSyntax(value, elGetter);
}


/* eslint-enable */
