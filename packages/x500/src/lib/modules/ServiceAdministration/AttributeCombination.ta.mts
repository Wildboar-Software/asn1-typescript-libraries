/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary AttributeCombination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCombination  ::=  CHOICE {
 *   attribute  [0]  AttributeType,
 *   and        [1]  SEQUENCE OF AttributeCombination,
 *   or         [2]  SEQUENCE OF AttributeCombination,
 *   not        [3]  AttributeCombination,
 *   ... }
 * ```
 */
export type AttributeCombination =
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { and: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { or: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { not: AttributeCombination } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AttributeCombination: $.ASN1Decoder<AttributeCombination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCombination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCombination} The decoded data structure.
 */
export function _decode_AttributeCombination(el: _Element): AttributeCombination {
    if (!_cached_decoder_for_AttributeCombination) {
        _cached_decoder_for_AttributeCombination = $._decode_extensible_choice<AttributeCombination>(
            {
                "CONTEXT 0": [
                    "attribute",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_explicit<AttributeCombination[]>(() =>
                        $._decodeSequenceOf<AttributeCombination>(
                            () => _decode_AttributeCombination
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_explicit<AttributeCombination[]>(() =>
                        $._decodeSequenceOf<AttributeCombination>(
                            () => _decode_AttributeCombination
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "not",
                    $._decode_explicit<AttributeCombination>(
                        () => _decode_AttributeCombination
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AttributeCombination(el);
}

let _cached_encoder_for_AttributeCombination: $.ASN1Encoder<AttributeCombination> | null = null;

/**
 * @summary Encodes a(n) AttributeCombination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCombination, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCombination(
    value: AttributeCombination,
    elGetter: $.ASN1Encoder<AttributeCombination>
): _Element {
    if (!_cached_encoder_for_AttributeCombination) {
        _cached_encoder_for_AttributeCombination = $._encode_choice<AttributeCombination>(
            {
                attribute: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.DER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            $.DER
                        ),
                    $.DER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            $.DER
                        ),
                    $.DER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeCombination,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_AttributeCombination(value, elGetter);
}


/* eslint-enable */
