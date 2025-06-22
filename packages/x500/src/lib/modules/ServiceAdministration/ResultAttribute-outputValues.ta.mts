/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary ResultAttribute_outputValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAttribute-outputValues ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ResultAttribute_outputValues =
    | { selectedValues: _Element[] } /* CHOICE_ALT_ROOT */
    | { matchedValuesOnly: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResultAttribute_outputValues: $.ASN1Decoder<ResultAttribute_outputValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute_outputValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAttribute_outputValues} The decoded data structure.
 */
export function _decode_ResultAttribute_outputValues(el: _Element) {
    if (!_cached_decoder_for_ResultAttribute_outputValues) {
        _cached_decoder_for_ResultAttribute_outputValues = $._decode_inextensible_choice<ResultAttribute_outputValues>(
            {
                "UNIVERSAL 16": [
                    "selectedValues",
                    $._decodeSequenceOf<_Element>(() => $._decodeAny),
                ],
                "UNIVERSAL 5": ["matchedValuesOnly", $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_ResultAttribute_outputValues(el);
}

let _cached_encoder_for_ResultAttribute_outputValues: $.ASN1Encoder<ResultAttribute_outputValues> | null = null;

/**
 * @summary Encodes a(n) ResultAttribute_outputValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute_outputValues, encoded as an ASN.1 Element.
 */
export function _encode_ResultAttribute_outputValues(
    value: ResultAttribute_outputValues,
    elGetter: $.ASN1Encoder<ResultAttribute_outputValues>
) {
    if (!_cached_encoder_for_ResultAttribute_outputValues) {
        _cached_encoder_for_ResultAttribute_outputValues = $._encode_choice<ResultAttribute_outputValues>(
            {
                selectedValues: $._encodeSequenceOf<_Element>(
                    () => $._encodeAny,
                    $.DER
                ),
                matchedValuesOnly: $._encodeNull,
            },
            $.DER
        );
    }
    return _cached_encoder_for_ResultAttribute_outputValues(value, elGetter);
}


/* eslint-enable */
