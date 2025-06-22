/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../InformationFramework/RDNSequence.ta.mjs";
/**
 * @summary Exclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Exclusions  ::=  SET SIZE (1..MAX) OF RDNSequence
 * ```
 */
export type Exclusions = RDNSequence[]; // SetOfType

let _cached_decoder_for_Exclusions: $.ASN1Decoder<Exclusions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Exclusions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Exclusions} The decoded data structure.
 */
export function _decode_Exclusions(el: _Element) {
    if (!_cached_decoder_for_Exclusions) {
        _cached_decoder_for_Exclusions = $._decodeSetOf<RDNSequence>(
            () => _decode_RDNSequence
        );
    }
    return _cached_decoder_for_Exclusions(el);
}

let _cached_encoder_for_Exclusions: $.ASN1Encoder<Exclusions> | null = null;

/**
 * @summary Encodes a(n) Exclusions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Exclusions, encoded as an ASN.1 Element.
 */
export function _encode_Exclusions(
    value: Exclusions,
    elGetter: $.ASN1Encoder<Exclusions>
) {
    if (!_cached_encoder_for_Exclusions) {
        _cached_encoder_for_Exclusions = $._encodeSetOf<RDNSequence>(
            () => _encode_RDNSequence,
            $.DER
        );
    }
    return _cached_encoder_for_Exclusions(value, elGetter);
}


/* eslint-enable */
