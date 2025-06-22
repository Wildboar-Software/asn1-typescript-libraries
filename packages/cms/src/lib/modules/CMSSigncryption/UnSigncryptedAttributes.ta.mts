/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta.mjs";

/**
 * @summary UnSigncryptedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnSigncryptedAttributes  ::=
 * SEQUENCE (SIZE(1..MAX)) OF Attribute{{UnSigncryptionAttributes}}
 * ```
 */
export type UnSigncryptedAttributes = Attribute[]; // SequenceOfType


let _cached_decoder_for_UnSigncryptedAttributes: $.ASN1Decoder<UnSigncryptedAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnSigncryptedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnSigncryptedAttributes} The decoded data structure.
 */
export function _decode_UnSigncryptedAttributes(el: _Element) {
    if (!_cached_decoder_for_UnSigncryptedAttributes) {
        _cached_decoder_for_UnSigncryptedAttributes = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnSigncryptedAttributes(el);
}


let _cached_encoder_for_UnSigncryptedAttributes: $.ASN1Encoder<UnSigncryptedAttributes> | null = null;


/**
 * @summary Encodes a(n) UnSigncryptedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnSigncryptedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnSigncryptedAttributes(
    value: UnSigncryptedAttributes,
    elGetter: $.ASN1Encoder<UnSigncryptedAttributes>
) {
    if (!_cached_encoder_for_UnSigncryptedAttributes) {
        _cached_encoder_for_UnSigncryptedAttributes = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.DER
        );
    }
    return _cached_encoder_for_UnSigncryptedAttributes(value, elGetter);
}


/* eslint-enable */
