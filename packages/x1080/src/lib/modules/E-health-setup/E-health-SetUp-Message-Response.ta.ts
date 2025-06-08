/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    E_health_SetUp_Message_Response_interactive,
    _decode_E_health_SetUp_Message_Response_interactive,
    _encode_E_health_SetUp_Message_Response_interactive,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive.ta';
export {
    E_health_SetUp_Message_Response_interactive,
    _decode_E_health_SetUp_Message_Response_interactive,
    _encode_E_health_SetUp_Message_Response_interactive,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive.ta';

/* START_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Response */
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
/* END_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Response */
let _cached_decoder_for_E_health_SetUp_Message_Response: $.ASN1Decoder<E_health_SetUp_Message_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Response */

/* START_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Response */
/**
 * @summary Decodes an ASN.1 element into a(n) E_health_SetUp_Message_Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_health_SetUp_Message_Response} The decoded data structure.
 */
export function _decode_E_health_SetUp_Message_Response(el: _Element) {
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
/* END_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Response */
let _cached_encoder_for_E_health_SetUp_Message_Response: $.ASN1Encoder<E_health_SetUp_Message_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Response */

/* START_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Response */
/**
 * @summary Encodes a(n) E_health_SetUp_Message_Response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_health_SetUp_Message_Response, encoded as an ASN.1 Element.
 */
export function _encode_E_health_SetUp_Message_Response(
    value: E_health_SetUp_Message_Response,
    elGetter: $.ASN1Encoder<E_health_SetUp_Message_Response>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Response */

/* eslint-enable */
