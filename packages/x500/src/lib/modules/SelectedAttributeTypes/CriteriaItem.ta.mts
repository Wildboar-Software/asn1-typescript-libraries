/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary CriteriaItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CriteriaItem  ::=  CHOICE {
 *   equality          [0]  AttributeType,
 *   substrings        [1]  AttributeType,
 *   greaterOrEqual    [2]  AttributeType,
 *   lessOrEqual       [3]  AttributeType,
 *   approximateMatch  [4]  AttributeType,
 *   ... }
 * ```
 */
export type CriteriaItem =
    | { equality: AttributeType } /* CHOICE_ALT_ROOT */
    | { substrings: AttributeType } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximateMatch: AttributeType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CriteriaItem: $.ASN1Decoder<CriteriaItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CriteriaItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CriteriaItem} The decoded data structure.
 */
export function _decode_CriteriaItem(el: _Element): CriteriaItem {
    if (!_cached_decoder_for_CriteriaItem) {
        _cached_decoder_for_CriteriaItem = $._decode_extensible_choice<CriteriaItem>(
            {
                "CONTEXT 0": [
                    "equality",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 1": [
                    "substrings",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 2": [
                    "greaterOrEqual",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 3": [
                    "lessOrEqual",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 4": [
                    "approximateMatch",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CriteriaItem(el);
}

let _cached_encoder_for_CriteriaItem: $.ASN1Encoder<CriteriaItem> | null = null;

/**
 * @summary Encodes a(n) CriteriaItem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CriteriaItem, encoded as an ASN.1 Element.
 */
export function _encode_CriteriaItem(
    value: CriteriaItem,
    elGetter: $.ASN1Encoder<CriteriaItem>
): _Element {
    if (!_cached_encoder_for_CriteriaItem) {
        _cached_encoder_for_CriteriaItem = $._encode_choice<CriteriaItem>(
            {
                equality: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.DER
                ),
                substrings: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    $.DER
                ),
                greaterOrEqual: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeType,
                    $.DER
                ),
                lessOrEqual: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeType,
                    $.DER
                ),
                approximateMatch: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_AttributeType,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CriteriaItem(value, elGetter);
}


/* eslint-enable */
