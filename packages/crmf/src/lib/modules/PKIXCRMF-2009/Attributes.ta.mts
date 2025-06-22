/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeSet,
    _decode_AttributeSet,
    _encode_AttributeSet,
} from "../PKIX-CommonTypes-2009/AttributeSet.ta.mjs";

/**
 * @summary Attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attributes  ::=  SET OF AttributeSet{{PrivateKeyAttributes}}
 * ```
 */
export type Attributes = AttributeSet[]; // SetOfType


let _cached_decoder_for_Attributes: $.ASN1Decoder<Attributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attributes} The decoded data structure.
 */
export function _decode_Attributes(el: _Element) {
    if (!_cached_decoder_for_Attributes) {
        _cached_decoder_for_Attributes = $._decodeSetOf<AttributeSet>(
            () => _decode_AttributeSet
        );
    }
    return _cached_decoder_for_Attributes(el);
}


let _cached_encoder_for_Attributes: $.ASN1Encoder<Attributes> | null = null;


/**
 * @summary Encodes a(n) Attributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attributes, encoded as an ASN.1 Element.
 */
export function _encode_Attributes(
    value: Attributes,
    elGetter: $.ASN1Encoder<Attributes>
) {
    if (!_cached_encoder_for_Attributes) {
        _cached_encoder_for_Attributes = $._encodeSetOf<AttributeSet>(
            () => _encode_AttributeSet,
            $.DER
        );
    }
    return _cached_encoder_for_Attributes(value, elGetter);
}


/* eslint-enable */
