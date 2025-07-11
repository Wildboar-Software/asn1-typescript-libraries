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
 * @summary ModifiedValidity_validUntil
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifiedValidity-validUntil ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifiedValidity_validUntil =
    | { explicitTermination: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | { unchanged: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifiedValidity_validUntil: $.ASN1Decoder<ModifiedValidity_validUntil> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifiedValidity_validUntil
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifiedValidity_validUntil} The decoded data structure.
 */
export function _decode_ModifiedValidity_validUntil(el: _Element): ModifiedValidity_validUntil {
    if (!_cached_decoder_for_ModifiedValidity_validUntil) {
        _cached_decoder_for_ModifiedValidity_validUntil = $._decode_extensible_choice<ModifiedValidity_validUntil>(
            {
                "CONTEXT 0": [
                    "explicitTermination",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "time",
                    $._decode_explicit<Time>(() => _decode_Time),
                ],
                "CONTEXT 2": [
                    "unchanged",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifiedValidity_validUntil(el);
}

let _cached_encoder_for_ModifiedValidity_validUntil: $.ASN1Encoder<ModifiedValidity_validUntil> | null = null;

/**
 * @summary Encodes a(n) ModifiedValidity_validUntil into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifiedValidity_validUntil, encoded as an ASN.1 Element.
 */
export function _encode_ModifiedValidity_validUntil(
    value: ModifiedValidity_validUntil,
    elGetter: $.ASN1Encoder<ModifiedValidity_validUntil>
): _Element {
    if (!_cached_encoder_for_ModifiedValidity_validUntil) {
        _cached_encoder_for_ModifiedValidity_validUntil = $._encode_choice<ModifiedValidity_validUntil>(
            {
                explicitTermination: $._encode_explicit(
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
                unchanged: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ModifiedValidity_validUntil(value, elGetter);
}


/* eslint-enable */
