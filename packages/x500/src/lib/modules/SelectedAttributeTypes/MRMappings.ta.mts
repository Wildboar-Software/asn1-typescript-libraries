/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "../ServiceAdministration/MRMapping.ta.mjs";
/**
 * @summary MRMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MRMappings  ::=  SEQUENCE OF MRMapping
 * ```
 */
export type MRMappings = MRMapping[]; // SequenceOfType

let _cached_decoder_for_MRMappings: $.ASN1Decoder<MRMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MRMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRMappings} The decoded data structure.
 */
export function _decode_MRMappings(el: _Element) {
    if (!_cached_decoder_for_MRMappings) {
        _cached_decoder_for_MRMappings = $._decodeSequenceOf<MRMapping>(
            () => _decode_MRMapping
        );
    }
    return _cached_decoder_for_MRMappings(el);
}

let _cached_encoder_for_MRMappings: $.ASN1Encoder<MRMappings> | null = null;

/**
 * @summary Encodes a(n) MRMappings into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMappings, encoded as an ASN.1 Element.
 */
export function _encode_MRMappings(
    value: MRMappings,
    elGetter: $.ASN1Encoder<MRMappings>
) {
    if (!_cached_encoder_for_MRMappings) {
        _cached_encoder_for_MRMappings = $._encodeSequenceOf<MRMapping>(
            () => _encode_MRMapping,
            $.DER
        );
    }
    return _cached_encoder_for_MRMappings(value, elGetter);
}


/* eslint-enable */
