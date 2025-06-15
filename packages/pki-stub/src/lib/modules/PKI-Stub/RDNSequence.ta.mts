/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../PKI-Stub/RelativeDistinguishedName.ta.mjs";

/**
 * @summary RDNSequence
 * @description
 *
 * A sequence of relative distinguished names in an order that descends from the
 * root of the DIT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType

let _cached_decoder_for_RDNSequence: $.ASN1Decoder<RDNSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export function _decode_RDNSequence(el: _Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence =
            $._decodeSequenceOf<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            );
    }
    return _cached_decoder_for_RDNSequence(el);
}

let _cached_encoder_for_RDNSequence: $.ASN1Encoder<RDNSequence> | null = null;

/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: $.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence =
            $._encodeSequenceOf<RelativeDistinguishedName>(
                () => _encode_RelativeDistinguishedName,
                $.BER
            );
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}


/* eslint-enable */
