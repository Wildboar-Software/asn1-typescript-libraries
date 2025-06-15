/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary AttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypes  ::=  SET OF AttributeType
 * ```
 */
export type AttributeTypes = AttributeType[]; // SetOfType

let _cached_decoder_for_AttributeTypes: $.ASN1Decoder<AttributeTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypes} The decoded data structure.
 */
export function _decode_AttributeTypes(el: _Element) {
    if (!_cached_decoder_for_AttributeTypes) {
        _cached_decoder_for_AttributeTypes = $._decodeSetOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_AttributeTypes(el);
}

let _cached_encoder_for_AttributeTypes: $.ASN1Encoder<AttributeTypes> | null = null;

/**
 * @summary Encodes a(n) AttributeTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypes, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypes(
    value: AttributeTypes,
    elGetter: $.ASN1Encoder<AttributeTypes>
) {
    if (!_cached_encoder_for_AttributeTypes) {
        _cached_encoder_for_AttributeTypes = $._encodeSetOf<AttributeType>(
            () => _encode_AttributeType,
            $.DER
        );
    }
    return _cached_encoder_for_AttributeTypes(value, elGetter);
}


/* eslint-enable */
