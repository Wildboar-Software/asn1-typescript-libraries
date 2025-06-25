/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../AttributeCertificateDefinitions/CertPolicyId.ta.mjs";
/**
 * @summary AcceptableCertPoliciesSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableCertPoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF CertPolicyId
 * ```
 */
export type AcceptableCertPoliciesSyntax = CertPolicyId[]; // SequenceOfType

let _cached_decoder_for_AcceptableCertPoliciesSyntax: $.ASN1Decoder<AcceptableCertPoliciesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableCertPoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableCertPoliciesSyntax} The decoded data structure.
 */
export function _decode_AcceptableCertPoliciesSyntax(el: _Element): AcceptableCertPoliciesSyntax {
    if (!_cached_decoder_for_AcceptableCertPoliciesSyntax) {
        _cached_decoder_for_AcceptableCertPoliciesSyntax = $._decodeSequenceOf<CertPolicyId>(
            () => _decode_CertPolicyId
        );
    }
    return _cached_decoder_for_AcceptableCertPoliciesSyntax(el);
}

let _cached_encoder_for_AcceptableCertPoliciesSyntax: $.ASN1Encoder<AcceptableCertPoliciesSyntax> | null = null;

/**
 * @summary Encodes a(n) AcceptableCertPoliciesSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableCertPoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableCertPoliciesSyntax(
    value: AcceptableCertPoliciesSyntax,
    elGetter: $.ASN1Encoder<AcceptableCertPoliciesSyntax>
): _Element {
    if (!_cached_encoder_for_AcceptableCertPoliciesSyntax) {
        _cached_encoder_for_AcceptableCertPoliciesSyntax = $._encodeSequenceOf<CertPolicyId>(
            () => _encode_CertPolicyId,
            $.DER
        );
    }
    return _cached_encoder_for_AcceptableCertPoliciesSyntax(value, elGetter);
}


/* eslint-enable */
