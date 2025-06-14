/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from '../MSAbstractService/AttributeValueAssertion.ta.mjs';
import {
    FilterItem_substrings,
    _decode_FilterItem_substrings,
    _encode_FilterItem_substrings,
} from '../MSAbstractService/FilterItem-substrings.ta.mjs';
import {
    MatchingRuleAssertion,
    _decode_MatchingRuleAssertion,
    _encode_MatchingRuleAssertion,
} from '../MSAbstractService/MatchingRuleAssertion.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION FilterItem */
/**
 * @summary FilterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem  ::=  CHOICE {
 *   equality           [0]  AttributeValueAssertion,
 *   substrings
 *     [1]  SEQUENCE {type     X413ATTRIBUTE.&id({AttributeTable}),
 *                    strings
 *                      SEQUENCE OF
 *                        CHOICE {initial
 *                                  [0]  X413ATTRIBUTE.&Type
 *                                         ({AttributeTable}{@substrings.type}),
 *                                any
 *                                  [1]  X413ATTRIBUTE.&Type
 *                                         ({AttributeTable}{@substrings.type}),
 *                                final
 *                                  [2]  X413ATTRIBUTE.&Type
 *                                         ({AttributeTable}{@substrings.type})
 *                        }},
 *   greater-or-equal   [2]  AttributeValueAssertion,
 *   less-or-equal      [3]  AttributeValueAssertion,
 *   present            [4]  X413ATTRIBUTE.&id({AttributeTable}),
 *   approximate-match  [5]  AttributeValueAssertion,
 *   -- 1994 extension
 *   other-match        [6]  MatchingRuleAssertion
 * }
 * ```
 */
export type FilterItem =
    | { equality: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { substrings: FilterItem_substrings } /* CHOICE_ALT_ROOT */
    | { greater_or_equal: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { less_or_equal: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { present: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximate_match: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { other_match: MatchingRuleAssertion } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */
let _cached_decoder_for_FilterItem: $.ASN1Decoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem} The decoded data structure.
 */
export function _decode_FilterItem(el: _Element) {
    if (!_cached_decoder_for_FilterItem) {
        _cached_decoder_for_FilterItem = $._decode_inextensible_choice<FilterItem>(
            {
                'CONTEXT 0': [
                    'equality',
                    $._decode_implicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                'CONTEXT 1': [
                    'substrings',
                    $._decode_implicit<FilterItem_substrings>(
                        () => _decode_FilterItem_substrings
                    ),
                ],
                'CONTEXT 2': [
                    'greater_or_equal',
                    $._decode_implicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                'CONTEXT 3': [
                    'less_or_equal',
                    $._decode_implicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                'CONTEXT 4': [
                    'present',
                    $._decode_implicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                'CONTEXT 5': [
                    'approximate_match',
                    $._decode_implicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                'CONTEXT 6': [
                    'other_match',
                    $._decode_implicit<MatchingRuleAssertion>(
                        () => _decode_MatchingRuleAssertion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FilterItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */
let _cached_encoder_for_FilterItem: $.ASN1Encoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem */
/**
 * @summary Encodes a(n) FilterItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem(
    value: FilterItem,
    elGetter: $.ASN1Encoder<FilterItem>
) {
    if (!_cached_encoder_for_FilterItem) {
        _cached_encoder_for_FilterItem = $._encode_choice<FilterItem>(
            {
                equality: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                substrings: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_FilterItem_substrings,
                    $.BER
                ),
                greater_or_equal: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                less_or_equal: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                present: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_AttributeType,
                    $.BER
                ),
                approximate_match: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                other_match: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_MatchingRuleAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FilterItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem */

/* eslint-enable */
