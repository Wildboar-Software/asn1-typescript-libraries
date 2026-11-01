/* eslint-disable */
import {
    type INTEGER,
    type NULL,
    type ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Period_months_bitMonth, _decode_Period_months_bitMonth, _encode_Period_months_bitMonth } from "../SelectedAttributeTypes/Period-months-bitMonth.ta.mjs";

/**
 * @summary Period_months
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-months ::= CHOICE {
 *   allMonths  NULL,
 *   intMonth   SET OF INTEGER,
 *   bitMonth   BIT STRING {
 *     january   (0),
 *     february  (1),
 *     march     (2),
 *     april     (3),
 *     may       (4),
 *     june      (5),
 *     july      (6),
 *     august    (7),
 *     september (8),
 *     october   (9),
 *     november  (10),
 *     december  (11)},
 *   ... }
 * ```
 */
export
type Period_months =
    { allMonths: NULL } /* CHOICE_ALT_ROOT */
    | { intMonth: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitMonth: Period_months_bitMonth } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Period_months: $.ASN1Decoder<Period_months> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_months
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_months (el: _Element): Period_months {
    if (!_cached_decoder_for_Period_months) { _cached_decoder_for_Period_months = $._decode_extensible_choice<Period_months>({
    "UNIVERSAL 5": [ "allMonths", $._decodeNull ],
    "UNIVERSAL 17": [ "intMonth", $._decodeSetOf<INTEGER>(() => $._decodeInteger) ],
    "UNIVERSAL 3": [ "bitMonth", _decode_Period_months_bitMonth ]
}); }
    return _cached_decoder_for_Period_months(el);
}

let _cached_encoder_for_Period_months: $.ASN1Encoder<Period_months> | null = null;

/**
 * @summary Encodes a(n) Period_months into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months, encoded as an ASN.1 Element.
 */
export
function _encode_Period_months (value: Period_months, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_months) { _cached_encoder_for_Period_months = $._encode_choice<Period_months>({
    "allMonths": $._encodeNull,
    "intMonth": $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
    "bitMonth": _encode_Period_months_bitMonth,
}, $.BER); }
    return _cached_encoder_for_Period_months(value, elGetter);
}

/* eslint-enable */
