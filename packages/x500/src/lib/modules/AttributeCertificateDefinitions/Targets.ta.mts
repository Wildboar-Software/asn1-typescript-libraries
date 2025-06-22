/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Target,
    _decode_Target,
    _encode_Target,
} from "../AttributeCertificateDefinitions/Target.ta.mjs";
/**
 * @summary Targets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Targets  ::=  SEQUENCE SIZE (1..MAX) OF Target
 * ```
 */
export type Targets = Target[]; // SequenceOfType

let _cached_decoder_for_Targets: $.ASN1Decoder<Targets> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Targets
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Targets} The decoded data structure.
 */
export function _decode_Targets(el: _Element) {
    if (!_cached_decoder_for_Targets) {
        _cached_decoder_for_Targets = $._decodeSequenceOf<Target>(
            () => _decode_Target
        );
    }
    return _cached_decoder_for_Targets(el);
}

let _cached_encoder_for_Targets: $.ASN1Encoder<Targets> | null = null;

/**
 * @summary Encodes a(n) Targets into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Targets, encoded as an ASN.1 Element.
 */
export function _encode_Targets(
    value: Targets,
    elGetter: $.ASN1Encoder<Targets>
) {
    if (!_cached_encoder_for_Targets) {
        _cached_encoder_for_Targets = $._encodeSequenceOf<Target>(
            () => _encode_Target,
            $.DER
        );
    }
    return _cached_encoder_for_Targets(value, elGetter);
}


/* eslint-enable */
