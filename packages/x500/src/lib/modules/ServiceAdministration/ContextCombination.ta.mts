/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary ContextCombination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextCombination  ::=  CHOICE {
 *   context  [0]  CONTEXT.&id({SupportedContexts}),
 *   and      [1]  SEQUENCE OF ContextCombination,
 *   or       [2]  SEQUENCE OF ContextCombination,
 *   not      [3]  ContextCombination,
 *   ... }
 * ```
 */
export type ContextCombination =
    | { context: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { or: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { not: ContextCombination } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ContextCombination: $.ASN1Decoder<ContextCombination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextCombination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextCombination} The decoded data structure.
 */
export function _decode_ContextCombination(el: _Element): ContextCombination {
    if (!_cached_decoder_for_ContextCombination) {
        _cached_decoder_for_ContextCombination = $._decode_extensible_choice<ContextCombination>(
            {
                "CONTEXT 0": [
                    "context",
                    $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_explicit<ContextCombination[]>(() =>
                        $._decodeSequenceOf<ContextCombination>(
                            () => _decode_ContextCombination
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_explicit<ContextCombination[]>(() =>
                        $._decodeSequenceOf<ContextCombination>(
                            () => _decode_ContextCombination
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "not",
                    $._decode_explicit<ContextCombination>(
                        () => _decode_ContextCombination
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ContextCombination(el);
}

let _cached_encoder_for_ContextCombination: $.ASN1Encoder<ContextCombination> | null = null;

/**
 * @summary Encodes a(n) ContextCombination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextCombination, encoded as an ASN.1 Element.
 */
export function _encode_ContextCombination(
    value: ContextCombination,
    elGetter: $.ASN1Encoder<ContextCombination>
): _Element {
    if (!_cached_encoder_for_ContextCombination) {
        _cached_encoder_for_ContextCombination = $._encode_choice<ContextCombination>(
            {
                context: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.DER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.DER
                        ),
                    $.DER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.DER
                        ),
                    $.DER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ContextCombination,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ContextCombination(value, elGetter);
}


/* eslint-enable */
