/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertPolicyId,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
} from "../CertificateExtensions/CertPolicyId.ta.mjs";
/**
 * @summary CertPolicySet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicySet  ::=  SEQUENCE SIZE (1..MAX) OF CertPolicyId
 * ```
 */
export type CertPolicySet = CertPolicyId[]; // SequenceOfType

let _cached_decoder_for_CertPolicySet: $.ASN1Decoder<CertPolicySet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicySet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPolicySet} The decoded data structure.
 */
export function _decode_CertPolicySet(el: _Element): CertPolicySet {
    if (!_cached_decoder_for_CertPolicySet) {
        _cached_decoder_for_CertPolicySet = $._decodeSequenceOf<CertPolicyId>(
            () => _decode_CertPolicyId
        );
    }
    return _cached_decoder_for_CertPolicySet(el);
}

let _cached_encoder_for_CertPolicySet: $.ASN1Encoder<CertPolicySet> | null = null;

/**
 * @summary Encodes a(n) CertPolicySet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicySet, encoded as an ASN.1 Element.
 */
export function _encode_CertPolicySet(
    value: CertPolicySet,
    elGetter: $.ASN1Encoder<CertPolicySet>
): _Element {
    if (!_cached_encoder_for_CertPolicySet) {
        _cached_encoder_for_CertPolicySet = $._encodeSequenceOf<CertPolicyId>(
            () => _encode_CertPolicyId,
            $.DER
        );
    }
    return _cached_encoder_for_CertPolicySet(value, elGetter);
}


/* eslint-enable */
