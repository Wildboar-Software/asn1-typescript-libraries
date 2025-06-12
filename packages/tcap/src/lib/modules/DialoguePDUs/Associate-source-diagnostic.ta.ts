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
    Associate_source_diagnostic_dialogue_service_user,
    _decode_Associate_source_diagnostic_dialogue_service_user,
    _encode_Associate_source_diagnostic_dialogue_service_user,
} from '../DialoguePDUs/Associate-source-diagnostic-dialogue-service-user.ta.js';
import {
    Associate_source_diagnostic_dialogue_service_provider,
    _decode_Associate_source_diagnostic_dialogue_service_provider,
    _encode_Associate_source_diagnostic_dialogue_service_provider,
} from '../DialoguePDUs/Associate-source-diagnostic-dialogue-service-provider.ta.js';

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic */
/**
 * @summary Associate_source_diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic  ::=  CHOICE {
 *   dialogue-service-user
 *     [1]  INTEGER {null(0), no-reason-given(1),
 *                   application-context-name-not-supported(2)},
 *   dialogue-service-provider
 *     [2]  INTEGER {null(0), no-reason-given(1), no-common-dialogue-portion(2)}
 * }
 * ```
 */
export type Associate_source_diagnostic =
    | {
          dialogue_service_user: Associate_source_diagnostic_dialogue_service_user;
      } /* CHOICE_ALT_ROOT */
    | {
          dialogue_service_provider: Associate_source_diagnostic_dialogue_service_provider;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */
let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic(el: _Element) {
    if (!_cached_decoder_for_Associate_source_diagnostic) {
        _cached_decoder_for_Associate_source_diagnostic = $._decode_inextensible_choice<Associate_source_diagnostic>(
            {
                'CONTEXT 1': [
                    'dialogue_service_user',
                    $._decode_implicit<Associate_source_diagnostic_dialogue_service_user>(
                        () =>
                            _decode_Associate_source_diagnostic_dialogue_service_user
                    ),
                ],
                'CONTEXT 2': [
                    'dialogue_service_provider',
                    $._decode_implicit<Associate_source_diagnostic_dialogue_service_provider>(
                        () =>
                            _decode_Associate_source_diagnostic_dialogue_service_provider
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Associate_source_diagnostic(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */
let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */
/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic(
    value: Associate_source_diagnostic,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic) {
        _cached_encoder_for_Associate_source_diagnostic = $._encode_choice<Associate_source_diagnostic>(
            {
                dialogue_service_user: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _encode_Associate_source_diagnostic_dialogue_service_user,
                    $.BER
                ),
                dialogue_service_provider: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _encode_Associate_source_diagnostic_dialogue_service_provider,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */

/* eslint-enable */
