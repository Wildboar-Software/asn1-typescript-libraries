/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UiiItem,
    _decode_UiiItem,
    _encode_UiiItem,
} from "../SelectedAttributeTypes/UiiItem.ta.mjs";
/**
 * @summary UiiFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFilter  ::=  CHOICE {
 *   item  [0]  UiiItem,
 *   and   [1]  SET OF UiiFilter,
 *   or    [2]  SET OF UiiFilter,
 *   not   [3]  UiiFilter }
 * ```
 */
export type UiiFilter =
    | { item: UiiItem } /* CHOICE_ALT_ROOT */
    | { and: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { or: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { not: UiiFilter } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UiiFilter: $.ASN1Decoder<UiiFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UiiFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFilter} The decoded data structure.
 */
export function _decode_UiiFilter(el: _Element) {
    if (!_cached_decoder_for_UiiFilter) {
        _cached_decoder_for_UiiFilter = $._decode_inextensible_choice<UiiFilter>(
            {
                "CONTEXT 0": [
                    "item",
                    $._decode_explicit<UiiItem>(() => _decode_UiiItem),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_explicit<UiiFilter[]>(() =>
                        $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_explicit<UiiFilter[]>(() =>
                        $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                    ),
                ],
                "CONTEXT 3": [
                    "not",
                    $._decode_explicit<UiiFilter>(() => _decode_UiiFilter),
                ],
            }
        );
    }
    return _cached_decoder_for_UiiFilter(el);
}

let _cached_encoder_for_UiiFilter: $.ASN1Encoder<UiiFilter> | null = null;

/**
 * @summary Encodes a(n) UiiFilter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFilter, encoded as an ASN.1 Element.
 */
export function _encode_UiiFilter(
    value: UiiFilter,
    elGetter: $.ASN1Encoder<UiiFilter>
) {
    if (!_cached_encoder_for_UiiFilter) {
        _cached_encoder_for_UiiFilter = $._encode_choice<UiiFilter>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UiiItem,
                    $.DER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.DER
                        ),
                    $.DER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.DER
                        ),
                    $.DER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_UiiFilter,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_UiiFilter(value, elGetter);
}


/* eslint-enable */
