/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ESSSecurityLabel,
    _decode_ESSSecurityLabel,
    _encode_ESSSecurityLabel,
} from "../ExtendedSecurityServices-2006/ESSSecurityLabel.ta.mjs";

/**
 * @summary EquivalentLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquivalentLabels  ::=  SEQUENCE OF ESSSecurityLabel
 * ```
 */
export type EquivalentLabels = ESSSecurityLabel[]; // SequenceOfType


let _cached_decoder_for_EquivalentLabels: $.ASN1Decoder<EquivalentLabels> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquivalentLabels} The decoded data structure.
 */
export function _decode_EquivalentLabels(el: _Element) {
    if (!_cached_decoder_for_EquivalentLabels) {
        _cached_decoder_for_EquivalentLabels = $._decodeSequenceOf<ESSSecurityLabel>(
            () => _decode_ESSSecurityLabel
        );
    }
    return _cached_decoder_for_EquivalentLabels(el);
}


let _cached_encoder_for_EquivalentLabels: $.ASN1Encoder<EquivalentLabels> | null = null;


/**
 * @summary Encodes a(n) EquivalentLabels into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentLabels, encoded as an ASN.1 Element.
 */
export function _encode_EquivalentLabels(
    value: EquivalentLabels,
    elGetter: $.ASN1Encoder<EquivalentLabels>
) {
    if (!_cached_encoder_for_EquivalentLabels) {
        _cached_encoder_for_EquivalentLabels = $._encodeSequenceOf<ESSSecurityLabel>(
            () => _encode_ESSSecurityLabel,
            $.BER
        );
    }
    return _cached_encoder_for_EquivalentLabels(value, elGetter);
}


/* eslint-enable */
