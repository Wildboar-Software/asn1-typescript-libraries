/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax/Attribute.ta.mjs";

/**
 * @summary UnsignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export type UnsignedAttributes = Attribute[]; // SetOfType


let _cached_decoder_for_UnsignedAttributes: $.ASN1Decoder<UnsignedAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsignedAttributes} The decoded data structure.
 */
export function _decode_UnsignedAttributes(el: _Element): UnsignedAttributes {
    if (!_cached_decoder_for_UnsignedAttributes) {
        _cached_decoder_for_UnsignedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnsignedAttributes(el);
}


let _cached_encoder_for_UnsignedAttributes: $.ASN1Encoder<UnsignedAttributes> | null = null;


/**
 * @summary Encodes a(n) UnsignedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnsignedAttributes(
    value: UnsignedAttributes,
    elGetter: $.ASN1Encoder<UnsignedAttributes>
): _Element {
    if (!_cached_encoder_for_UnsignedAttributes) {
        _cached_encoder_for_UnsignedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_UnsignedAttributes(value, elGetter);
}


/* eslint-enable */
