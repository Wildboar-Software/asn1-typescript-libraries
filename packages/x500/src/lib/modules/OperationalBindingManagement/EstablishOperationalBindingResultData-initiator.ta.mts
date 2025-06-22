/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary EstablishOperationalBindingResultData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResultData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EstablishOperationalBindingResultData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_replies: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_replies: _Element } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Decoder<EstablishOperationalBindingResultData_initiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResultData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResultData_initiator} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResultData_initiator(
    el: _Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_decoder_for_EstablishOperationalBindingResultData_initiator = $._decode_inextensible_choice<EstablishOperationalBindingResultData_initiator>(
            {
                "CONTEXT 3": [
                    "symmetric",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 4": [
                    "roleA_replies",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 5": [
                    "roleB_replies",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData_initiator(
        el
    );
}

let _cached_encoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Encoder<EstablishOperationalBindingResultData_initiator> | null = null;

/**
 * @summary Encodes a(n) EstablishOperationalBindingResultData_initiator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResultData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResultData_initiator(
    value: EstablishOperationalBindingResultData_initiator,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData_initiator>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_encoder_for_EstablishOperationalBindingResultData_initiator = $._encode_choice<EstablishOperationalBindingResultData_initiator>(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.DER
                ),
                roleA_replies: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.DER
                ),
                roleB_replies: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData_initiator(
        value,
        elGetter
    );
}


/* eslint-enable */
