/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta.mjs";

/**
 * @summary UnauthAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnauthAttributes  ::=  SET SIZE (1..MAX) OF Attribute {{UnauthAttributeSet}}
 * ```
 */
export type UnauthAttributes = Attribute[]; // SetOfType


let _cached_decoder_for_UnauthAttributes: $.ASN1Decoder<UnauthAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnauthAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnauthAttributes} The decoded data structure.
 */
export function _decode_UnauthAttributes(el: _Element) {
    if (!_cached_decoder_for_UnauthAttributes) {
        _cached_decoder_for_UnauthAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnauthAttributes(el);
}


let _cached_encoder_for_UnauthAttributes: $.ASN1Encoder<UnauthAttributes> | null = null;


/**
 * @summary Encodes a(n) UnauthAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnauthAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnauthAttributes(
    value: UnauthAttributes,
    elGetter: $.ASN1Encoder<UnauthAttributes>
) {
    if (!_cached_encoder_for_UnauthAttributes) {
        _cached_encoder_for_UnauthAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.DER
        );
    }
    return _cached_encoder_for_UnauthAttributes(value, elGetter);
}


/* eslint-enable */
