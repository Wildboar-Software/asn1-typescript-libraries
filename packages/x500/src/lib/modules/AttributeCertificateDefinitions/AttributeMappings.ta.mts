/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeMappings_Item,
    _decode_AttributeMappings_Item,
    _encode_AttributeMappings_Item,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item.ta.mjs";
/**
 * @summary AttributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings  ::=  SET OF CHOICE {
 *   typeMappings      [0]  SEQUENCE {
 *     local             [0]  AttributeType,
 *     remote            [1]  AttributeType,
 *     ... },
 *   typeValueMappings [1]  SEQUENCE {
 *     local             [0]  AttributeTypeAndValue,
 *     remote            [1]  AttributeTypeAndValue,
 *     ... } }
 * ```
 */
export type AttributeMappings = AttributeMappings_Item[]; // SetOfType

let _cached_decoder_for_AttributeMappings: $.ASN1Decoder<AttributeMappings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings(el: _Element): AttributeMappings {
    if (!_cached_decoder_for_AttributeMappings) {
        _cached_decoder_for_AttributeMappings = $._decodeSetOf<AttributeMappings_Item>(
            () => _decode_AttributeMappings_Item
        );
    }
    return _cached_decoder_for_AttributeMappings(el);
}

let _cached_encoder_for_AttributeMappings: $.ASN1Encoder<AttributeMappings> | null = null;

/**
 * @summary Encodes a(n) AttributeMappings into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings(
    value: AttributeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings>
): _Element {
    if (!_cached_encoder_for_AttributeMappings) {
        _cached_encoder_for_AttributeMappings = $._encodeSetOf<AttributeMappings_Item>(
            () => _encode_AttributeMappings_Item,
            $.DER
        );
    }
    return _cached_encoder_for_AttributeMappings(value, elGetter);
}


/* eslint-enable */
