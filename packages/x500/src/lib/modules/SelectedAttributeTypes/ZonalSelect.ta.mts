/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary ZonalSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalSelect  ::=  SEQUENCE OF AttributeType
 * ```
 */
export type ZonalSelect = AttributeType[]; // SequenceOfType

let _cached_decoder_for_ZonalSelect: $.ASN1Decoder<ZonalSelect> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ZonalSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ZonalSelect} The decoded data structure.
 */
export function _decode_ZonalSelect(el: _Element) {
    if (!_cached_decoder_for_ZonalSelect) {
        _cached_decoder_for_ZonalSelect = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_ZonalSelect(el);
}

let _cached_encoder_for_ZonalSelect: $.ASN1Encoder<ZonalSelect> | null = null;

/**
 * @summary Encodes a(n) ZonalSelect into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalSelect, encoded as an ASN.1 Element.
 */
export function _encode_ZonalSelect(
    value: ZonalSelect,
    elGetter: $.ASN1Encoder<ZonalSelect>
) {
    if (!_cached_encoder_for_ZonalSelect) {
        _cached_encoder_for_ZonalSelect = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.DER
        );
    }
    return _cached_encoder_for_ZonalSelect(value, elGetter);
}


/* eslint-enable */
