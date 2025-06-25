/* eslint-disable */
import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    E_health_SetUp_Message_Response_interactive,
    _decode_E_health_SetUp_Message_Response_interactive,
    _encode_E_health_SetUp_Message_Response_interactive,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive.ta.mjs';

/**
 * @summary E_health_SetUp_Message_Response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-health-SetUp-Message-Response  ::=  CHOICE {
 *   simple       BOOLEAN-- True is OK, False is Reject-- ,
 *   -- Only for response to a simple Request
 *   interactive
 *     CHOICE {accept              NULL,
 *             conditional-accept
 *               SEQUENCE {id
 *                           CR-SEQUENCE.&id({CR-Sequences}),
 *                         reduced-requirements
 *                           CR-SEQUENCE.&requirements({CR-Sequences}{@.id}),
 *                         voice-options         OBJECT IDENTIFIER,
 *                         video-options         OBJECT IDENTIFIER},
 *             reject              NULL}
 * }
 * ```
 */
export type E_health_SetUp_Message_Response =
    | { simple: BOOLEAN } /* CHOICE_ALT_ROOT */
    | {
          interactive: E_health_SetUp_Message_Response_interactive;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_E_health_SetUp_Message_Response: $.ASN1Decoder<E_health_SetUp_Message_Response> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_health_SetUp_Message_Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_health_SetUp_Message_Response} The decoded data structure.
 */
export function _decode_E_health_SetUp_Message_Response(el: _Element): E_health_SetUp_Message_Response {
    if (!_cached_decoder_for_E_health_SetUp_Message_Response) {
        _cached_decoder_for_E_health_SetUp_Message_Response = $._decode_inextensible_choice<E_health_SetUp_Message_Response>(
            {
                'CONTEXT 0': ['simple', $._decodeBoolean],
                'CONTEXT 1': [
                    'interactive',
                    $._decode_explicit(
                        () => _decode_E_health_SetUp_Message_Response_interactive,
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_E_health_SetUp_Message_Response(el);
}


let _cached_encoder_for_E_health_SetUp_Message_Response: $.ASN1Encoder<E_health_SetUp_Message_Response> | null = null;


/**
 * @summary Encodes a(n) E_health_SetUp_Message_Response into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_health_SetUp_Message_Response, encoded as an ASN.1 Element.
 */
export function _encode_E_health_SetUp_Message_Response(
    value: E_health_SetUp_Message_Response,
    elGetter: $.ASN1Encoder<E_health_SetUp_Message_Response>
): _Element {
    if (!_cached_encoder_for_E_health_SetUp_Message_Response) {
        _cached_encoder_for_E_health_SetUp_Message_Response = $._encode_choice<E_health_SetUp_Message_Response>(
            {
                simple: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeBoolean,
                    $.BER,
                ),
                interactive: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_E_health_SetUp_Message_Response_interactive,
                    $.BER,
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_E_health_SetUp_Message_Response(value, elGetter);
}


/* eslint-enable */
