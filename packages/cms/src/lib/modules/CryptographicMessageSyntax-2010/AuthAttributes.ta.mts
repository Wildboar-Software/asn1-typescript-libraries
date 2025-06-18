/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta.mjs";

/**
 * @summary AuthAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttributes  ::=  SET SIZE (1..MAX) OF Attribute {{AuthAttributeSet}}
 * ```
 */
export type AuthAttributes = Attribute[]; // SetOfType


let _cached_decoder_for_AuthAttributes: $.ASN1Decoder<AuthAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttributes} The decoded data structure.
 */
export function _decode_AuthAttributes(el: _Element) {
    if (!_cached_decoder_for_AuthAttributes) {
        _cached_decoder_for_AuthAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AuthAttributes(el);
}


let _cached_encoder_for_AuthAttributes: $.ASN1Encoder<AuthAttributes> | null = null;


/**
 * @summary Encodes a(n) AuthAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttributes, encoded as an ASN.1 Element.
 */
export function _encode_AuthAttributes(
    value: AuthAttributes,
    elGetter: $.ASN1Encoder<AuthAttributes>
) {
    if (!_cached_encoder_for_AuthAttributes) {
        _cached_encoder_for_AuthAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.DER
        );
    }
    return _cached_encoder_for_AuthAttributes(value, elGetter);
}


/* eslint-enable */
