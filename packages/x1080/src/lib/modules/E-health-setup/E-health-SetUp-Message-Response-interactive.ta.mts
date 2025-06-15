/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    E_health_SetUp_Message_Response_interactive_conditional_accept,
    _decode_E_health_SetUp_Message_Response_interactive_conditional_accept,
    _encode_E_health_SetUp_Message_Response_interactive_conditional_accept,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive-conditional-accept.ta.mjs';

/**
 * @summary E_health_SetUp_Message_Response_interactive
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-health-SetUp-Message-Response-interactive ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type E_health_SetUp_Message_Response_interactive =
    | { accept: NULL } /* CHOICE_ALT_ROOT */
    | {
          conditional_accept: E_health_SetUp_Message_Response_interactive_conditional_accept;
      } /* CHOICE_ALT_ROOT */
    | { reject: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_E_health_SetUp_Message_Response_interactive: $.ASN1Decoder<E_health_SetUp_Message_Response_interactive> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_health_SetUp_Message_Response_interactive
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_health_SetUp_Message_Response_interactive} The decoded data structure.
 */
export function _decode_E_health_SetUp_Message_Response_interactive(
    el: _Element
) {
    if (!_cached_decoder_for_E_health_SetUp_Message_Response_interactive) {
        _cached_decoder_for_E_health_SetUp_Message_Response_interactive = $._decode_inextensible_choice<E_health_SetUp_Message_Response_interactive>(
            {
                'CONTEXT 0': ['accept', $._decodeNull],
                'CONTEXT 1': [
                    'conditional_accept',
                    _decode_E_health_SetUp_Message_Response_interactive_conditional_accept,
                ],
                'CONTEXT 2': ['reject', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_E_health_SetUp_Message_Response_interactive(el);
}


let _cached_encoder_for_E_health_SetUp_Message_Response_interactive: $.ASN1Encoder<E_health_SetUp_Message_Response_interactive> | null = null;


/**
 * @summary Encodes a(n) E_health_SetUp_Message_Response_interactive into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_health_SetUp_Message_Response_interactive, encoded as an ASN.1 Element.
 */
export function _encode_E_health_SetUp_Message_Response_interactive(
    value: E_health_SetUp_Message_Response_interactive,
    elGetter: $.ASN1Encoder<E_health_SetUp_Message_Response_interactive>
) {
    if (!_cached_encoder_for_E_health_SetUp_Message_Response_interactive) {
        _cached_encoder_for_E_health_SetUp_Message_Response_interactive = $._encode_choice<E_health_SetUp_Message_Response_interactive>(
            {
                accept: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER,
                ),
                conditional_accept: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_E_health_SetUp_Message_Response_interactive_conditional_accept,
                    $.BER,
                ),
                reject: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER,
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_E_health_SetUp_Message_Response_interactive(
        value,
        elGetter
    );
}


/* eslint-enable */
