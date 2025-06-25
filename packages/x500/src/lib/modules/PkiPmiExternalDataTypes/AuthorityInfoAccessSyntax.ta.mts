/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AccessDescription,
    _decode_AccessDescription,
    _encode_AccessDescription,
} from "../PkiPmiExternalDataTypes/AccessDescription.ta.mjs";
/**
 * @summary AuthorityInfoAccessSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorityInfoAccessSyntax  ::=  SEQUENCE SIZE (1..MAX) OF AccessDescription
 * ```
 */
export type AuthorityInfoAccessSyntax = AccessDescription[]; // SequenceOfType

let _cached_decoder_for_AuthorityInfoAccessSyntax: $.ASN1Decoder<AuthorityInfoAccessSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityInfoAccessSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityInfoAccessSyntax} The decoded data structure.
 */
export function _decode_AuthorityInfoAccessSyntax(el: _Element): AuthorityInfoAccessSyntax {
    if (!_cached_decoder_for_AuthorityInfoAccessSyntax) {
        _cached_decoder_for_AuthorityInfoAccessSyntax = $._decodeSequenceOf<AccessDescription>(
            () => _decode_AccessDescription
        );
    }
    return _cached_decoder_for_AuthorityInfoAccessSyntax(el);
}

let _cached_encoder_for_AuthorityInfoAccessSyntax: $.ASN1Encoder<AuthorityInfoAccessSyntax> | null = null;

/**
 * @summary Encodes a(n) AuthorityInfoAccessSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityInfoAccessSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityInfoAccessSyntax(
    value: AuthorityInfoAccessSyntax,
    elGetter: $.ASN1Encoder<AuthorityInfoAccessSyntax>
): _Element {
    if (!_cached_encoder_for_AuthorityInfoAccessSyntax) {
        _cached_encoder_for_AuthorityInfoAccessSyntax = $._encodeSequenceOf<AccessDescription>(
            () => _encode_AccessDescription,
            $.DER
        );
    }
    return _cached_encoder_for_AuthorityInfoAccessSyntax(value, elGetter);
}


/* eslint-enable */
