/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary SelectedTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectedTypes  ::=  SEQUENCE SIZE (1..MAX) OF AttributeType
 * ```
 */
export type SelectedTypes = AttributeType[]; // SequenceOfType

let _cached_decoder_for_SelectedTypes: $.ASN1Decoder<SelectedTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectedTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectedTypes} The decoded data structure.
 */
export function _decode_SelectedTypes(el: _Element) {
    if (!_cached_decoder_for_SelectedTypes) {
        _cached_decoder_for_SelectedTypes = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_SelectedTypes(el);
}

let _cached_encoder_for_SelectedTypes: $.ASN1Encoder<SelectedTypes> | null = null;

/**
 * @summary Encodes a(n) SelectedTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectedTypes, encoded as an ASN.1 Element.
 */
export function _encode_SelectedTypes(
    value: SelectedTypes,
    elGetter: $.ASN1Encoder<SelectedTypes>
) {
    if (!_cached_encoder_for_SelectedTypes) {
        _cached_encoder_for_SelectedTypes = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.DER
        );
    }
    return _cached_encoder_for_SelectedTypes(value, elGetter);
}


/* eslint-enable */
