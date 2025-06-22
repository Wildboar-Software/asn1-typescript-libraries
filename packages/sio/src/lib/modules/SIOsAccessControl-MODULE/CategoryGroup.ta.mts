/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OptionalCategoryData,
    _decode_OptionalCategoryData,
    _encode_OptionalCategoryData,
} from "../SIOsAccessControl-MODULE/OptionalCategoryData.ta.mjs";

/**
 * @summary CategoryGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CategoryGroup  ::=  SEQUENCE SIZE (1..MAX) OF OptionalCategoryData
 * ```
 */
export type CategoryGroup = OptionalCategoryData[]; // SequenceOfType


let _cached_decoder_for_CategoryGroup: $.ASN1Decoder<CategoryGroup> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CategoryGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CategoryGroup} The decoded data structure.
 */
export function _decode_CategoryGroup(el: _Element) {
    if (!_cached_decoder_for_CategoryGroup) {
        _cached_decoder_for_CategoryGroup = $._decodeSequenceOf<OptionalCategoryData>(
            () => _decode_OptionalCategoryData
        );
    }
    return _cached_decoder_for_CategoryGroup(el);
}


let _cached_encoder_for_CategoryGroup: $.ASN1Encoder<CategoryGroup> | null = null;


/**
 * @summary Encodes a(n) CategoryGroup into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CategoryGroup, encoded as an ASN.1 Element.
 */
export function _encode_CategoryGroup(
    value: CategoryGroup,
    elGetter: $.ASN1Encoder<CategoryGroup>
) {
    if (!_cached_encoder_for_CategoryGroup) {
        _cached_encoder_for_CategoryGroup = $._encodeSequenceOf<OptionalCategoryData>(
            () => _encode_OptionalCategoryData,
            $.BER
        );
    }
    return _cached_encoder_for_CategoryGroup(value, elGetter);
}


/* eslint-enable */
