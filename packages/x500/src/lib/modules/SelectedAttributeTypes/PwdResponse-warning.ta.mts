/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PwdResponse_warning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-warning ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PwdResponse_warning =
    | { timeleft: INTEGER } /* CHOICE_ALT_ROOT */
    | { graceRemaining: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PwdResponse_warning: $.ASN1Decoder<PwdResponse_warning> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_warning
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse_warning} The decoded data structure.
 */
export function _decode_PwdResponse_warning(el: _Element): PwdResponse_warning {
    if (!_cached_decoder_for_PwdResponse_warning) {
        _cached_decoder_for_PwdResponse_warning = $._decode_extensible_choice<PwdResponse_warning>(
            {
                "CONTEXT 0": [
                    "timeleft",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
                "CONTEXT 1": [
                    "graceRemaining",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_PwdResponse_warning(el);
}

let _cached_encoder_for_PwdResponse_warning: $.ASN1Encoder<PwdResponse_warning> | null = null;

/**
 * @summary Encodes a(n) PwdResponse_warning into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_warning, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse_warning(
    value: PwdResponse_warning,
    elGetter: $.ASN1Encoder<PwdResponse_warning>
): _Element {
    if (!_cached_encoder_for_PwdResponse_warning) {
        _cached_encoder_for_PwdResponse_warning = $._encode_choice<PwdResponse_warning>(
            {
                timeleft: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.DER
                ),
                graceRemaining: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_PwdResponse_warning(value, elGetter);
}


/* eslint-enable */
