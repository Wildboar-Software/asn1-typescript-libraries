/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta.mjs";
/**
 * @summary ModifiedValidity_validFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity-validFrom ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifiedValidity_validFrom =
    | { now: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifiedValidity_validFrom: $.ASN1Decoder<ModifiedValidity_validFrom> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity_validFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity_validFrom} The decoded data structure.
 */
export function _decode_ModifiedValidity_validFrom(el: _Element) {
    if (!_cached_decoder_for_ModifiedValidity_validFrom) {
        _cached_decoder_for_ModifiedValidity_validFrom = $._decode_extensible_choice<ModifiedValidity_validFrom>(
            {
                "CONTEXT 0": [
                    "now",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "time",
                    $._decode_explicit<Time>(() => _decode_Time),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifiedValidity_validFrom(el);
}

let _cached_encoder_for_ModifiedValidity_validFrom: $.ASN1Encoder<ModifiedValidity_validFrom> | null = null;

/**
 * @summary Encodes a(n) ModifiedValidity_validFrom into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity_validFrom, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity_validFrom(
    value: ModifiedValidity_validFrom,
    elGetter: $.ASN1Encoder<ModifiedValidity_validFrom>
) {
    if (!_cached_encoder_for_ModifiedValidity_validFrom) {
        _cached_encoder_for_ModifiedValidity_validFrom = $._encode_choice<ModifiedValidity_validFrom>(
            {
                now: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.DER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validFrom(value, elGetter);
}


/* eslint-enable */
