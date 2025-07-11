/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PolicyInformation,
    _decode_PolicyInformation,
    _encode_PolicyInformation,
} from "../CertificateExtensions/PolicyInformation.ta.mjs";
/**
 * @summary CertificatePoliciesSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PolicyInformation
 * ```
 */
export type CertificatePoliciesSyntax = PolicyInformation[]; // SequenceOfType

let _cached_decoder_for_CertificatePoliciesSyntax: $.ASN1Decoder<CertificatePoliciesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePoliciesSyntax} The decoded data structure.
 */
export function _decode_CertificatePoliciesSyntax(el: _Element): CertificatePoliciesSyntax {
    if (!_cached_decoder_for_CertificatePoliciesSyntax) {
        _cached_decoder_for_CertificatePoliciesSyntax = $._decodeSequenceOf<PolicyInformation>(
            () => _decode_PolicyInformation
        );
    }
    return _cached_decoder_for_CertificatePoliciesSyntax(el);
}

let _cached_encoder_for_CertificatePoliciesSyntax: $.ASN1Encoder<CertificatePoliciesSyntax> | null = null;

/**
 * @summary Encodes a(n) CertificatePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePoliciesSyntax(
    value: CertificatePoliciesSyntax,
    elGetter: $.ASN1Encoder<CertificatePoliciesSyntax>
): _Element {
    if (!_cached_encoder_for_CertificatePoliciesSyntax) {
        _cached_encoder_for_CertificatePoliciesSyntax = $._encodeSequenceOf<PolicyInformation>(
            () => _encode_PolicyInformation,
            $.DER
        );
    }
    return _cached_encoder_for_CertificatePoliciesSyntax(value, elGetter);
}


/* eslint-enable */
