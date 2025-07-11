/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Period_days_bitDay,
    _decode_Period_days_bitDay,
    _encode_Period_days_bitDay,
} from "../SelectedAttributeTypes/Period-days-bitDay.ta.mjs";
import {
    XDayOf,
    _decode_XDayOf,
    _encode_XDayOf,
} from "../SelectedAttributeTypes/XDayOf.ta.mjs";
/**
 * @summary Period_days
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-days ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_days =
    | { intDay: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitDay: Period_days_bitDay } /* CHOICE_ALT_ROOT */
    | { dayOf: XDayOf } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Period_days: $.ASN1Decoder<Period_days> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_days
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_days} The decoded data structure.
 */
export function _decode_Period_days(el: _Element): Period_days {
    if (!_cached_decoder_for_Period_days) {
        _cached_decoder_for_Period_days = $._decode_extensible_choice<Period_days>(
            {
                "UNIVERSAL 17": [
                    "intDay",
                    $._decodeSetOf<INTEGER>(() => $._decodeInteger),
                ],
                "UNIVERSAL 3": ["bitDay", _decode_Period_days_bitDay],
                "CONTEXT 1": ["dayOf", _decode_XDayOf],
                "CONTEXT 2": ["dayOf", _decode_XDayOf],
                "CONTEXT 3": ["dayOf", _decode_XDayOf],
                "CONTEXT 4": ["dayOf", _decode_XDayOf],
                "CONTEXT 5": ["dayOf", _decode_XDayOf],
            }
        );
    }
    return _cached_decoder_for_Period_days(el);
}

let _cached_encoder_for_Period_days: $.ASN1Encoder<Period_days> | null = null;

/**
 * @summary Encodes a(n) Period_days into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days, encoded as an ASN.1 Element.
 */
export function _encode_Period_days(
    value: Period_days,
    elGetter: $.ASN1Encoder<Period_days>
): _Element {
    if (!_cached_encoder_for_Period_days) {
        _cached_encoder_for_Period_days = $._encode_choice<Period_days>(
            {
                intDay: $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.DER),
                bitDay: _encode_Period_days_bitDay,
                dayOf: _encode_XDayOf,
            },
            $.DER
        );
    }
    return _cached_encoder_for_Period_days(value, elGetter);
}


/* eslint-enable */
