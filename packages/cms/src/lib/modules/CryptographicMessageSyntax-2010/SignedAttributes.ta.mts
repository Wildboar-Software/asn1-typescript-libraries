/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta.mjs";

/**
 * @summary SignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes  ::=  Attributes {{ SignedAttributesSet }}
 * ```
 */
export type SignedAttributes = Attributes; // DefinedType


let _cached_decoder_for_SignedAttributes: $.ASN1Decoder<SignedAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export function _decode_SignedAttributes(el: _Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = _decode_Attributes;
    }
    return _cached_decoder_for_SignedAttributes(el);
}


let _cached_encoder_for_SignedAttributes: $.ASN1Encoder<SignedAttributes> | null = null;


/**
 * @summary Encodes a(n) SignedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: $.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = _encode_Attributes;
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}


/* eslint-enable */
