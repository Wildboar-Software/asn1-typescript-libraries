/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    EquivalentPolicy,
    _decode_EquivalentPolicy,
    _encode_EquivalentPolicy,
} from "../SIOsAccessControl-MODULE/EquivalentPolicy.ta.mjs";

/**
 * @summary EquivalentPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquivalentPolicies  ::=  SEQUENCE SIZE (0..MAX) OF EquivalentPolicy
 * ```
 */
export type EquivalentPolicies = EquivalentPolicy[]; // SequenceOfType


let _cached_decoder_for_EquivalentPolicies: $.ASN1Decoder<EquivalentPolicies> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentPolicies
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquivalentPolicies} The decoded data structure.
 */
export function _decode_EquivalentPolicies(el: _Element) {
    if (!_cached_decoder_for_EquivalentPolicies) {
        _cached_decoder_for_EquivalentPolicies = $._decodeSequenceOf<EquivalentPolicy>(
            () => _decode_EquivalentPolicy
        );
    }
    return _cached_decoder_for_EquivalentPolicies(el);
}


let _cached_encoder_for_EquivalentPolicies: $.ASN1Encoder<EquivalentPolicies> | null = null;


/**
 * @summary Encodes a(n) EquivalentPolicies into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentPolicies, encoded as an ASN.1 Element.
 */
export function _encode_EquivalentPolicies(
    value: EquivalentPolicies,
    elGetter: $.ASN1Encoder<EquivalentPolicies>
) {
    if (!_cached_encoder_for_EquivalentPolicies) {
        _cached_encoder_for_EquivalentPolicies = $._encodeSequenceOf<EquivalentPolicy>(
            () => _encode_EquivalentPolicy,
            $.BER
        );
    }
    return _cached_encoder_for_EquivalentPolicies(value, elGetter);
}


/* eslint-enable */
