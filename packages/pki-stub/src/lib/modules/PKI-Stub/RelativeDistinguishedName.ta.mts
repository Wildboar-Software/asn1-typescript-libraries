/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../PKI-Stub/AttributeTypeAndValue.ta.mjs";

/**
 * @summary RelativeDistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName  ::=  SET SIZE (1..MAX) OF AttributeTypeAndValue
 * ```
 */
export type RelativeDistinguishedName = AttributeTypeAndValue[]; // SetOfType

let _cached_decoder_for_RelativeDistinguishedName: $.ASN1Decoder<RelativeDistinguishedName> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export function _decode_RelativeDistinguishedName(el: _Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) {
        _cached_decoder_for_RelativeDistinguishedName =
            $._decodeSetOf<AttributeTypeAndValue>(
                () => _decode_AttributeTypeAndValue
            );
    }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}

let _cached_encoder_for_RelativeDistinguishedName: $.ASN1Encoder<RelativeDistinguishedName> | null =
    null;

/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_RelativeDistinguishedName(
    value: RelativeDistinguishedName,
    elGetter: $.ASN1Encoder<RelativeDistinguishedName>
) {
    if (!_cached_encoder_for_RelativeDistinguishedName) {
        _cached_encoder_for_RelativeDistinguishedName =
            $._encodeSetOf<AttributeTypeAndValue>(
                () => _encode_AttributeTypeAndValue,
                $.BER
            );
    }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}


/* eslint-enable */
