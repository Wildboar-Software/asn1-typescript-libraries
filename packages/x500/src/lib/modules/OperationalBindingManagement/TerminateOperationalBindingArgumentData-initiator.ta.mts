/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary TerminateOperationalBindingArgumentData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingArgumentData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TerminateOperationalBindingArgumentData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator: $.ASN1Decoder<TerminateOperationalBindingArgumentData_initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingArgumentData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingArgumentData_initiator} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingArgumentData_initiator(
    el: _Element
): TerminateOperationalBindingArgumentData_initiator {
    if (
        !_cached_decoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator = $._decode_inextensible_choice<TerminateOperationalBindingArgumentData_initiator>(
            {
                "CONTEXT 2": [
                    "symmetric",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 3": [
                    "roleA_initiates",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 4": [
                    "roleB_initiates",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_TerminateOperationalBindingArgumentData_initiator(
        el
    );
}

let _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator: $.ASN1Encoder<TerminateOperationalBindingArgumentData_initiator> | null = null;

/**
 * @summary Encodes a(n) TerminateOperationalBindingArgumentData_initiator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingArgumentData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingArgumentData_initiator(
    value: TerminateOperationalBindingArgumentData_initiator,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingArgumentData_initiator>
): _Element {
    if (
        !_cached_encoder_for_TerminateOperationalBindingArgumentData_initiator
    ) {
        _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator = $._encode_choice<TerminateOperationalBindingArgumentData_initiator>(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeAny,
                    $.DER
                ),
                roleA_initiates: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.DER
                ),
                roleB_initiates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}


/* eslint-enable */
