/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation } from "../PKIX1Implicit88/PolicyInformation.ta.mjs";
// export { PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation } from "../PKIX1Implicit88/PolicyInformation.ta.mjs";


/**
 * @summary CertificatePolicies
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificatePolicies  ::=  SEQUENCE SIZE (1..MAX) OF PolicyInformation
 * ```
 */
export
type CertificatePolicies = PolicyInformation[]; // SequenceOfType

let _cached_decoder_for_CertificatePolicies: $.ASN1Decoder<CertificatePolicies> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePolicies
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificatePolicies (el: _Element): CertificatePolicies {
    if (!_cached_decoder_for_CertificatePolicies) { _cached_decoder_for_CertificatePolicies = $._decodeSequenceOf<PolicyInformation>(() => _decode_PolicyInformation); }
    return _cached_decoder_for_CertificatePolicies(el);
}

let _cached_encoder_for_CertificatePolicies: $.ASN1Encoder<CertificatePolicies> | null = null;

/**
 * @summary Encodes a(n) CertificatePolicies into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePolicies, encoded as an ASN.1 Element.
 */
export
function _encode_CertificatePolicies (value: CertificatePolicies, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificatePolicies) { _cached_encoder_for_CertificatePolicies = $._encodeSequenceOf<PolicyInformation>(() => _encode_PolicyInformation, $.BER); }
    return _cached_encoder_for_CertificatePolicies(value, elGetter);
}


/* eslint-enable */
