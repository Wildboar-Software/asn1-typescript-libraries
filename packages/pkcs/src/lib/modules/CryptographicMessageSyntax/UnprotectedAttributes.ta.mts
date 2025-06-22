/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax/Attribute.ta.mjs";

/**
 * @summary UnprotectedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnprotectedAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type UnprotectedAttributes = Attribute[]; // SetOfType


let _cached_decoder_for_UnprotectedAttributes: $.ASN1Decoder<UnprotectedAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnprotectedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnprotectedAttributes} The decoded data structure.
 */
export function _decode_UnprotectedAttributes(el: _Element) {
    if (!_cached_decoder_for_UnprotectedAttributes) {
        _cached_decoder_for_UnprotectedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnprotectedAttributes(el);
}


let _cached_encoder_for_UnprotectedAttributes: $.ASN1Encoder<UnprotectedAttributes> | null = null;


/**
 * @summary Encodes a(n) UnprotectedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnprotectedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnprotectedAttributes(
    value: UnprotectedAttributes,
    elGetter: $.ASN1Encoder<UnprotectedAttributes>
) {
    if (!_cached_encoder_for_UnprotectedAttributes) {
        _cached_encoder_for_UnprotectedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_UnprotectedAttributes(value, elGetter);
}


/* eslint-enable */
