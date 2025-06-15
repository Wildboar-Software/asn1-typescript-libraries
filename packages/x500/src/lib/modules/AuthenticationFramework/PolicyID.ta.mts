/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta.mjs";
/**
 * @summary PolicyID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PolicyID  ::=  CertPolicyId
 * ```
 */
export type PolicyID = CertPolicyId; // DefinedType

let _cached_decoder_for_PolicyID: $.ASN1Decoder<PolicyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PolicyID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PolicyID} The decoded data structure.
 */
export function _decode_PolicyID(el: _Element) {
    if (!_cached_decoder_for_PolicyID) {
        _cached_decoder_for_PolicyID = _decode_CertPolicyId;
    }
    return _cached_decoder_for_PolicyID(el);
}

let _cached_encoder_for_PolicyID: $.ASN1Encoder<PolicyID> | null = null;

/**
 * @summary Encodes a(n) PolicyID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PolicyID, encoded as an ASN.1 Element.
 */
export function _encode_PolicyID(
    value: PolicyID,
    elGetter: $.ASN1Encoder<PolicyID>
) {
    if (!_cached_encoder_for_PolicyID) {
        _cached_encoder_for_PolicyID = _encode_CertPolicyId;
    }
    return _cached_encoder_for_PolicyID(value, elGetter);
}


/* eslint-enable */
