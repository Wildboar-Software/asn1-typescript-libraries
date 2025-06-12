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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReportSummary */
/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export enum _enum_for_ReportSummary {
    no_report_requested = 0,
    no_report_received = 1,
    report_outstanding = 2,
    delivery_cancelled = 3,
    delivery_report_from_another_recipient = 4,
    non_delivery_report_from_another_recipient = 5,
    delivery_report_from_intended_recipient = 6,
    non_delivery_report_from_intended_recipient = 7,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReportSummary */

/* START_OF_SYMBOL_DEFINITION ReportSummary */
/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export type ReportSummary = _enum_for_ReportSummary;
/* END_OF_SYMBOL_DEFINITION ReportSummary */

/* START_OF_SYMBOL_DEFINITION ReportSummary */
/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export const ReportSummary = _enum_for_ReportSummary;
/* END_OF_SYMBOL_DEFINITION ReportSummary */

/* START_OF_SYMBOL_DEFINITION ReportSummary_no_report_requested */
/**
 * @summary ReportSummary_no_report_requested
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_requested: ReportSummary =
    ReportSummary.no_report_requested; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_no_report_requested */

/* START_OF_SYMBOL_DEFINITION no_report_requested */
/**
 * @summary no_report_requested
 * @constant
 * @type {number}
 */
export const no_report_requested: ReportSummary =
    ReportSummary.no_report_requested; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_report_requested */

/* START_OF_SYMBOL_DEFINITION ReportSummary_no_report_received */
/**
 * @summary ReportSummary_no_report_received
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_received: ReportSummary =
    ReportSummary.no_report_received; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_no_report_received */

/* START_OF_SYMBOL_DEFINITION no_report_received */
/**
 * @summary no_report_received
 * @constant
 * @type {number}
 */
export const no_report_received: ReportSummary =
    ReportSummary.no_report_received; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_report_received */

/* START_OF_SYMBOL_DEFINITION ReportSummary_report_outstanding */
/**
 * @summary ReportSummary_report_outstanding
 * @constant
 * @type {number}
 */
export const ReportSummary_report_outstanding: ReportSummary =
    ReportSummary.report_outstanding; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_report_outstanding */

/* START_OF_SYMBOL_DEFINITION report_outstanding */
/**
 * @summary report_outstanding
 * @constant
 * @type {number}
 */
export const report_outstanding: ReportSummary =
    ReportSummary.report_outstanding; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION report_outstanding */

/* START_OF_SYMBOL_DEFINITION ReportSummary_delivery_cancelled */
/**
 * @summary ReportSummary_delivery_cancelled
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_cancelled: ReportSummary =
    ReportSummary.delivery_cancelled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_delivery_cancelled */

/* START_OF_SYMBOL_DEFINITION delivery_cancelled */
/**
 * @summary delivery_cancelled
 * @constant
 * @type {number}
 */
export const delivery_cancelled: ReportSummary =
    ReportSummary.delivery_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_cancelled */

/* START_OF_SYMBOL_DEFINITION ReportSummary_delivery_report_from_another_recipient */
/**
 * @summary ReportSummary_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.delivery_report_from_another_recipient; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_delivery_report_from_another_recipient */

/* START_OF_SYMBOL_DEFINITION delivery_report_from_another_recipient */
/**
 * @summary delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.delivery_report_from_another_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_report_from_another_recipient */

/* START_OF_SYMBOL_DEFINITION ReportSummary_non_delivery_report_from_another_recipient */
/**
 * @summary ReportSummary_non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_another_recipient; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_non_delivery_report_from_another_recipient */

/* START_OF_SYMBOL_DEFINITION non_delivery_report_from_another_recipient */
/**
 * @summary non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_another_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_delivery_report_from_another_recipient */

/* START_OF_SYMBOL_DEFINITION ReportSummary_delivery_report_from_intended_recipient */
/**
 * @summary ReportSummary_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.delivery_report_from_intended_recipient; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_delivery_report_from_intended_recipient */

/* START_OF_SYMBOL_DEFINITION delivery_report_from_intended_recipient */
/**
 * @summary delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.delivery_report_from_intended_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION delivery_report_from_intended_recipient */

/* START_OF_SYMBOL_DEFINITION ReportSummary_non_delivery_report_from_intended_recipient */
/**
 * @summary ReportSummary_non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_intended_recipient; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportSummary_non_delivery_report_from_intended_recipient */

/* START_OF_SYMBOL_DEFINITION non_delivery_report_from_intended_recipient */
/**
 * @summary non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_intended_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_delivery_report_from_intended_recipient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportSummary */
let _cached_decoder_for_ReportSummary: $.ASN1Decoder<ReportSummary> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportSummary */

/* START_OF_SYMBOL_DEFINITION _decode_ReportSummary */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportSummary
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportSummary} The decoded data structure.
 */
export function _decode_ReportSummary(el: _Element) {
    if (!_cached_decoder_for_ReportSummary) {
        _cached_decoder_for_ReportSummary = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReportSummary(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportSummary */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportSummary */
let _cached_encoder_for_ReportSummary: $.ASN1Encoder<ReportSummary> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportSummary */

/* START_OF_SYMBOL_DEFINITION _encode_ReportSummary */
/**
 * @summary Encodes a(n) ReportSummary into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSummary, encoded as an ASN.1 Element.
 */
export function _encode_ReportSummary(
    value: ReportSummary,
    elGetter: $.ASN1Encoder<ReportSummary>
) {
    if (!_cached_encoder_for_ReportSummary) {
        _cached_encoder_for_ReportSummary = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReportSummary(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportSummary */

/* eslint-enable */
