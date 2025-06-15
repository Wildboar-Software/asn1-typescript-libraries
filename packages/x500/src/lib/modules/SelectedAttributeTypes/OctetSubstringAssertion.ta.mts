/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    OctetSubstringAssertion_Item,
    _decode_OctetSubstringAssertion_Item,
    _encode_OctetSubstringAssertion_Item,
} from "../SelectedAttributeTypes/OctetSubstringAssertion-Item.ta.mjs";
/**
 * @summary OctetSubstringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetSubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  OCTET STRING,
 *   any      [1]  OCTET STRING,
 *   final    [2]  OCTET STRING,
 *   ... }
 * ```
 */
export type OctetSubstringAssertion = OctetSubstringAssertion_Item[]; // SequenceOfType

let _cached_decoder_for_OctetSubstringAssertion: $.ASN1Decoder<OctetSubstringAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetSubstringAssertion} The decoded data structure.
 */
export function _decode_OctetSubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_OctetSubstringAssertion) {
        _cached_decoder_for_OctetSubstringAssertion = $._decodeSequenceOf<OctetSubstringAssertion_Item>(
            () => _decode_OctetSubstringAssertion_Item
        );
    }
    return _cached_decoder_for_OctetSubstringAssertion(el);
}

let _cached_encoder_for_OctetSubstringAssertion: $.ASN1Encoder<OctetSubstringAssertion> | null = null;

/**
 * @summary Encodes a(n) OctetSubstringAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_OctetSubstringAssertion(
    value: OctetSubstringAssertion,
    elGetter: $.ASN1Encoder<OctetSubstringAssertion>
) {
    if (!_cached_encoder_for_OctetSubstringAssertion) {
        _cached_encoder_for_OctetSubstringAssertion = $._encodeSequenceOf<OctetSubstringAssertion_Item>(
            () => _encode_OctetSubstringAssertion_Item,
            $.DER
        );
    }
    return _cached_encoder_for_OctetSubstringAssertion(value, elGetter);
}


/* eslint-enable */
