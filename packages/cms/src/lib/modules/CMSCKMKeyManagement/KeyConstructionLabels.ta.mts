/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    KeyConstructionLabel,
    _decode_KeyConstructionLabel,
    _encode_KeyConstructionLabel,
} from "../CMSCKMKeyManagement/KeyConstructionLabel.ta.mjs";

/**
 * @summary KeyConstructionLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionLabels  ::=  SEQUENCE SIZE(1..MAX) OF KeyConstructionLabel
 * ```
 */
export type KeyConstructionLabels = KeyConstructionLabel[]; // SequenceOfType


let _cached_decoder_for_KeyConstructionLabels: $.ASN1Decoder<KeyConstructionLabels> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionLabels} The decoded data structure.
 */
export function _decode_KeyConstructionLabels(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionLabels) {
        _cached_decoder_for_KeyConstructionLabels = $._decodeSequenceOf<KeyConstructionLabel>(
            () => _decode_KeyConstructionLabel
        );
    }
    return _cached_decoder_for_KeyConstructionLabels(el);
}


let _cached_encoder_for_KeyConstructionLabels: $.ASN1Encoder<KeyConstructionLabels> | null = null;


/**
 * @summary Encodes a(n) KeyConstructionLabels into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionLabels, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionLabels(
    value: KeyConstructionLabels,
    elGetter: $.ASN1Encoder<KeyConstructionLabels>
) {
    if (!_cached_encoder_for_KeyConstructionLabels) {
        _cached_encoder_for_KeyConstructionLabels = $._encodeSequenceOf<KeyConstructionLabel>(
            () => _encode_KeyConstructionLabel,
            $.BER
        );
    }
    return _cached_encoder_for_KeyConstructionLabels(value, elGetter);
}


/* eslint-enable */
