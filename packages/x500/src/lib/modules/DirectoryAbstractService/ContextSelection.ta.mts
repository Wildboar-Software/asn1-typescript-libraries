/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta.mjs";
/**
 * @summary ContextSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextSelection  ::=  CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }
 * ```
 */
export type ContextSelection =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: TypeAndContextAssertion[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ContextSelection: $.ASN1Decoder<ContextSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextSelection} The decoded data structure.
 */
export function _decode_ContextSelection(el: _Element): ContextSelection {
    if (!_cached_decoder_for_ContextSelection) {
        _cached_decoder_for_ContextSelection = $._decode_extensible_choice<ContextSelection>(
            {
                "UNIVERSAL 5": ["allContexts", $._decodeNull],
                "UNIVERSAL 17": [
                    "selectedContexts",
                    $._decodeSetOf<TypeAndContextAssertion>(
                        () => _decode_TypeAndContextAssertion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ContextSelection(el);
}

let _cached_encoder_for_ContextSelection: $.ASN1Encoder<ContextSelection> | null = null;

/**
 * @summary Encodes a(n) ContextSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextSelection, encoded as an ASN.1 Element.
 */
export function _encode_ContextSelection(
    value: ContextSelection,
    elGetter: $.ASN1Encoder<ContextSelection>
): _Element {
    if (!_cached_encoder_for_ContextSelection) {
        _cached_encoder_for_ContextSelection = $._encode_choice<ContextSelection>(
            {
                allContexts: $._encodeNull,
                selectedContexts: $._encodeSetOf<TypeAndContextAssertion>(
                    () => _encode_TypeAndContextAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContextSelection(value, elGetter);
}


/* eslint-enable */
