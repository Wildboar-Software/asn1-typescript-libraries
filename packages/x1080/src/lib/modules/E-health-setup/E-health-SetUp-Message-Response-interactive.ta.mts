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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    E_health_SetUp_Message_Response_interactive_conditional_accept,
    _decode_E_health_SetUp_Message_Response_interactive_conditional_accept,
    _encode_E_health_SetUp_Message_Response_interactive_conditional_accept,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive-conditional-accept.ta.mjs';
export {
    E_health_SetUp_Message_Response_interactive_conditional_accept,
    _decode_E_health_SetUp_Message_Response_interactive_conditional_accept,
    _encode_E_health_SetUp_Message_Response_interactive_conditional_accept,
} from '../E-health-setup/E-health-SetUp-Message-Response-interactive-conditional-accept.ta.mjs';

/* START_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Response_interactive */
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
/* END_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Response_interactive */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Response_interactive */
let _cached_decoder_for_E_health_SetUp_Message_Response_interactive: $.ASN1Decoder<E_health_SetUp_Message_Response_interactive> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Response_interactive */

/* START_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Response_interactive */
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
/* END_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Response_interactive */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Response_interactive */
let _cached_encoder_for_E_health_SetUp_Message_Response_interactive: $.ASN1Encoder<E_health_SetUp_Message_Response_interactive> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Response_interactive */

/* START_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Response_interactive */
/**
 * @summary Encodes a(n) E_health_SetUp_Message_Response_interactive into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Response_interactive */

/* eslint-enable */
