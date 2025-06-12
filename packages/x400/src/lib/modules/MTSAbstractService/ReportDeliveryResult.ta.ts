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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../MTSAbstractService/ExtensionField.ta.js';

/* START_OF_SYMBOL_DEFINITION ReportDeliveryResult */
/**
 * @summary ReportDeliveryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportDeliveryResult  ::=  CHOICE {
 *   empty-result  NULL,
 *   ...,
 *   extensions
 *     SET SIZE (1..MAX) OF ExtensionField{{ReportDeliveryResultExtensions}}
 * }
 * ```
 */
export type ReportDeliveryResult =
    | { empty_result: NULL } /* CHOICE_ALT_ROOT */
    | { extensions: ExtensionField[] } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ReportDeliveryResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryResult */
let _cached_decoder_for_ReportDeliveryResult: $.ASN1Decoder<ReportDeliveryResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportDeliveryResult */

/* START_OF_SYMBOL_DEFINITION _decode_ReportDeliveryResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportDeliveryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportDeliveryResult} The decoded data structure.
 */
export function _decode_ReportDeliveryResult(el: _Element) {
    if (!_cached_decoder_for_ReportDeliveryResult) {
        _cached_decoder_for_ReportDeliveryResult = $._decode_extensible_choice<ReportDeliveryResult>(
            {
                'UNIVERSAL 5': ['empty_result', $._decodeNull],
                'UNIVERSAL 17': [
                    'extensions',
                    $._decodeSetOf<ExtensionField>(
                        () => _decode_ExtensionField
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ReportDeliveryResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportDeliveryResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryResult */
let _cached_encoder_for_ReportDeliveryResult: $.ASN1Encoder<ReportDeliveryResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportDeliveryResult */

/* START_OF_SYMBOL_DEFINITION _encode_ReportDeliveryResult */
/**
 * @summary Encodes a(n) ReportDeliveryResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportDeliveryResult, encoded as an ASN.1 Element.
 */
export function _encode_ReportDeliveryResult(
    value: ReportDeliveryResult,
    elGetter: $.ASN1Encoder<ReportDeliveryResult>
) {
    if (!_cached_encoder_for_ReportDeliveryResult) {
        _cached_encoder_for_ReportDeliveryResult = $._encode_choice<ReportDeliveryResult>(
            {
                empty_result: $._encodeNull,
                extensions: $._encodeSetOf<ExtensionField>(
                    () => _encode_ExtensionField,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReportDeliveryResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportDeliveryResult */

/* eslint-enable */
