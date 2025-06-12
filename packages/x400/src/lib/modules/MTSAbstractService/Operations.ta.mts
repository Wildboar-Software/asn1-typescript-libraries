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

/* START_OF_SYMBOL_DEFINITION Operations */
/**
 * @summary Operations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operations  ::=  BIT STRING {
 *   probe-submission-or-report-delivery(0),
 *   message-submission-or-message-delivery(1)}(SIZE (0..ub-bit-options))
 * ```
 */
export type Operations = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Operations */

/* START_OF_SYMBOL_DEFINITION Operations_probe_submission_or_report_delivery */
/**
 * @summary Operations_probe_submission_or_report_delivery
 * @constant
 */
export const Operations_probe_submission_or_report_delivery: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_probe_submission_or_report_delivery */

/* START_OF_SYMBOL_DEFINITION probe_submission_or_report_delivery */
/**
 * @summary probe_submission_or_report_delivery
 * @constant
 */
export const probe_submission_or_report_delivery: number = Operations_probe_submission_or_report_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION probe_submission_or_report_delivery */

/* START_OF_SYMBOL_DEFINITION Operations_message_submission_or_message_delivery */
/**
 * @summary Operations_message_submission_or_message_delivery
 * @constant
 */
export const Operations_message_submission_or_message_delivery: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Operations_message_submission_or_message_delivery */

/* START_OF_SYMBOL_DEFINITION message_submission_or_message_delivery */
/**
 * @summary message_submission_or_message_delivery
 * @constant
 */
export const message_submission_or_message_delivery: number = Operations_message_submission_or_message_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION message_submission_or_message_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Operations */
let _cached_decoder_for_Operations: $.ASN1Decoder<Operations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Operations */

/* START_OF_SYMBOL_DEFINITION _decode_Operations */
/**
 * @summary Decodes an ASN.1 element into a(n) Operations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Operations} The decoded data structure.
 */
export function _decode_Operations(el: _Element) {
    if (!_cached_decoder_for_Operations) {
        _cached_decoder_for_Operations = $._decodeBitString;
    }
    return _cached_decoder_for_Operations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Operations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Operations */
let _cached_encoder_for_Operations: $.ASN1Encoder<Operations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Operations */

/* START_OF_SYMBOL_DEFINITION _encode_Operations */
/**
 * @summary Encodes a(n) Operations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operations, encoded as an ASN.1 Element.
 */
export function _encode_Operations(
    value: Operations,
    elGetter: $.ASN1Encoder<Operations>
) {
    if (!_cached_encoder_for_Operations) {
        _cached_encoder_for_Operations = $._encodeBitString;
    }
    return _cached_encoder_for_Operations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Operations */

/* eslint-enable */
