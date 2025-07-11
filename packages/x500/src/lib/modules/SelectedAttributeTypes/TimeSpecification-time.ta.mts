/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Period,
    _decode_Period,
    _encode_Period,
} from "../SelectedAttributeTypes/Period.ta.mjs";
import {
    TimeSpecification_time_absolute,
    _decode_TimeSpecification_time_absolute,
    _encode_TimeSpecification_time_absolute,
} from "../SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
/**
 * @summary TimeSpecification_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeSpecification_time =
    | { absolute: TimeSpecification_time_absolute } /* CHOICE_ALT_ROOT */
    | { periodic: Period[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimeSpecification_time: $.ASN1Decoder<TimeSpecification_time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time} The decoded data structure.
 */
export function _decode_TimeSpecification_time(el: _Element): TimeSpecification_time {
    if (!_cached_decoder_for_TimeSpecification_time) {
        _cached_decoder_for_TimeSpecification_time = $._decode_inextensible_choice<TimeSpecification_time>(
            {
                "UNIVERSAL 16": [
                    "absolute",
                    _decode_TimeSpecification_time_absolute,
                ],
                "UNIVERSAL 17": [
                    "periodic",
                    $._decodeSetOf<Period>(() => _decode_Period),
                ],
            }
        );
    }
    return _cached_decoder_for_TimeSpecification_time(el);
}

let _cached_encoder_for_TimeSpecification_time: $.ASN1Encoder<TimeSpecification_time> | null = null;

/**
 * @summary Encodes a(n) TimeSpecification_time into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time(
    value: TimeSpecification_time,
    elGetter: $.ASN1Encoder<TimeSpecification_time>
): _Element {
    if (!_cached_encoder_for_TimeSpecification_time) {
        _cached_encoder_for_TimeSpecification_time = $._encode_choice<TimeSpecification_time>(
            {
                absolute: _encode_TimeSpecification_time_absolute,
                periodic: $._encodeSetOf<Period>(() => _encode_Period, $.DER),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TimeSpecification_time(value, elGetter);
}


/* eslint-enable */
