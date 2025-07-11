/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EquivalentClassification,
    _decode_EquivalentClassification,
    _encode_EquivalentClassification,
} from "../SIOsAccessControl-MODULE/EquivalentClassification.ta.mjs";

/**
 * @summary EquivalentClassifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquivalentClassifications  ::=
 *   SEQUENCE SIZE (0..MAX) OF EquivalentClassification
 * ```
 */
export type EquivalentClassifications = EquivalentClassification[]; // SequenceOfType


let _cached_decoder_for_EquivalentClassifications: $.ASN1Decoder<EquivalentClassifications> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentClassifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquivalentClassifications} The decoded data structure.
 */
export function _decode_EquivalentClassifications(el: _Element): EquivalentClassifications {
    if (!_cached_decoder_for_EquivalentClassifications) {
        _cached_decoder_for_EquivalentClassifications = $._decodeSequenceOf<EquivalentClassification>(
            () => _decode_EquivalentClassification
        );
    }
    return _cached_decoder_for_EquivalentClassifications(el);
}


let _cached_encoder_for_EquivalentClassifications: $.ASN1Encoder<EquivalentClassifications> | null = null;


/**
 * @summary Encodes a(n) EquivalentClassifications into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentClassifications, encoded as an ASN.1 Element.
 */
export function _encode_EquivalentClassifications(
    value: EquivalentClassifications,
    elGetter: $.ASN1Encoder<EquivalentClassifications>
): _Element {
    if (!_cached_encoder_for_EquivalentClassifications) {
        _cached_encoder_for_EquivalentClassifications = $._encodeSequenceOf<EquivalentClassification>(
            () => _encode_EquivalentClassification,
            $.BER
        );
    }
    return _cached_encoder_for_EquivalentClassifications(value, elGetter);
}


/* eslint-enable */
