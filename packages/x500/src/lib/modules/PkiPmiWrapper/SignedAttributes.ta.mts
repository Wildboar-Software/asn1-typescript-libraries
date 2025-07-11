/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
/**
 * @summary SignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes  ::=  SET SIZE (1..MAX) OF Attribute{{SupportedSignedAttributes}}
 * ```
 */
export type SignedAttributes = Attribute[]; // SetOfType

let _cached_decoder_for_SignedAttributes: $.ASN1Decoder<SignedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export function _decode_SignedAttributes(el: _Element): SignedAttributes {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
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
): _Element {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.DER
        );
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}


/* eslint-enable */
