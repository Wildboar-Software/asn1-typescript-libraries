/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    PolicyMappingsSyntax_Item,
    _decode_PolicyMappingsSyntax_Item,
    _encode_PolicyMappingsSyntax_Item,
} from "../CertificateExtensions/PolicyMappingsSyntax-Item.ta.mjs";
/**
 * @summary PolicyMappingsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyMappingsSyntax  ::=  SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *   issuerDomainPolicy   CertPolicyId,
 *   subjectDomainPolicy  CertPolicyId,
 *   ... }
 * ```
 */
export type PolicyMappingsSyntax = PolicyMappingsSyntax_Item[]; // SequenceOfType

let _cached_decoder_for_PolicyMappingsSyntax: $.ASN1Decoder<PolicyMappingsSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyMappingsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyMappingsSyntax} The decoded data structure.
 */
export function _decode_PolicyMappingsSyntax(el: _Element) {
    if (!_cached_decoder_for_PolicyMappingsSyntax) {
        _cached_decoder_for_PolicyMappingsSyntax = $._decodeSequenceOf<PolicyMappingsSyntax_Item>(
            () => _decode_PolicyMappingsSyntax_Item
        );
    }
    return _cached_decoder_for_PolicyMappingsSyntax(el);
}

let _cached_encoder_for_PolicyMappingsSyntax: $.ASN1Encoder<PolicyMappingsSyntax> | null = null;

/**
 * @summary Encodes a(n) PolicyMappingsSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyMappingsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_PolicyMappingsSyntax(
    value: PolicyMappingsSyntax,
    elGetter: $.ASN1Encoder<PolicyMappingsSyntax>
) {
    if (!_cached_encoder_for_PolicyMappingsSyntax) {
        _cached_encoder_for_PolicyMappingsSyntax = $._encodeSequenceOf<PolicyMappingsSyntax_Item>(
            () => _encode_PolicyMappingsSyntax_Item,
            $.DER
        );
    }
    return _cached_encoder_for_PolicyMappingsSyntax(value, elGetter);
}


/* eslint-enable */
