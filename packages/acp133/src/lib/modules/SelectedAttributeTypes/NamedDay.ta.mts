/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NamedDay_intNamedDays, _decode_NamedDay_intNamedDays, _encode_NamedDay_intNamedDays } from "../SelectedAttributeTypes/NamedDay-intNamedDays.ta.mjs";
// export { NamedDay_intNamedDays, _enum_for_NamedDay_intNamedDays, NamedDay_intNamedDays_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_monday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_friday /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDay_intNamedDays_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_NamedDay_intNamedDays, _encode_NamedDay_intNamedDays } from "../SelectedAttributeTypes/NamedDay-intNamedDays.ta.mjs";
import { NamedDay_bitNamedDays, _decode_NamedDay_bitNamedDays, _encode_NamedDay_bitNamedDays } from "../SelectedAttributeTypes/NamedDay-bitNamedDays.ta.mjs";
// export { NamedDay_bitNamedDays, NamedDay_bitNamedDays_sunday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_monday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_tuesday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_wednesday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_thursday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_friday /* IMPORTED_LONG_NAMED_BIT */, NamedDay_bitNamedDays_saturday /* IMPORTED_LONG_NAMED_BIT */, _decode_NamedDay_bitNamedDays, _encode_NamedDay_bitNamedDays } from "../SelectedAttributeTypes/NamedDay-bitNamedDays.ta.mjs";


/**
 * @summary NamedDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NamedDay  ::=  CHOICE {
 *   intNamedDays ENUMERATED {
 *     sunday      (1),
 *     monday      (2),
 *     tuesday     (3),
 *     wednesday   (4),
 *     thursday    (5),
 *     friday      (6),
 *     saturday    (7)},
 *   bitNamedDays BIT STRING {
 *     sunday      (0),
 *     monday      (1),
 *     tuesday     (2),
 *     wednesday   (3),
 *     thursday    (4),
 *     friday      (5),
 *     saturday    (6)} }
 * ```
 */
export
type NamedDay =
    { intNamedDays: NamedDay_intNamedDays } /* CHOICE_ALT_ROOT */
    | { bitNamedDays: NamedDay_bitNamedDays } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NamedDay: $.ASN1Decoder<NamedDay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NamedDay (el: _Element): NamedDay {
    if (!_cached_decoder_for_NamedDay) { _cached_decoder_for_NamedDay = $._decode_inextensible_choice<NamedDay>({
    "UNIVERSAL 10": [ "intNamedDays", _decode_NamedDay_intNamedDays ],
    "UNIVERSAL 3": [ "bitNamedDays", _decode_NamedDay_bitNamedDays ]
}); }
    return _cached_decoder_for_NamedDay(el);
}

let _cached_encoder_for_NamedDay: $.ASN1Encoder<NamedDay> | null = null;

/**
 * @summary Encodes a(n) NamedDay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay, encoded as an ASN.1 Element.
 */
export
function _encode_NamedDay (value: NamedDay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NamedDay) { _cached_encoder_for_NamedDay = $._encode_choice<NamedDay>({
    "intNamedDays": _encode_NamedDay_intNamedDays,
    "bitNamedDays": _encode_NamedDay_bitNamedDays,
}, $.BER); }
    return _cached_encoder_for_NamedDay(value, elGetter);
}


/* eslint-enable */
