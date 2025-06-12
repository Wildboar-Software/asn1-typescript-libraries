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

/* START_OF_SYMBOL_DEFINITION _enum_for_ReportingEvent */
/**
 * @summary ReportingEvent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```@enum {number}
 */
export enum _enum_for_ReportingEvent {
    registration = 0,
    request = 1,
    accept = 2,
    complete = 3,
    corresponding = 4,
    bulk = 5,
    interruption = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ReportingEvent */

/* START_OF_SYMBOL_DEFINITION ReportingEvent */
/**
 * @summary ReportingEvent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```@enum {number}
 */
export type ReportingEvent = _enum_for_ReportingEvent;
/* END_OF_SYMBOL_DEFINITION ReportingEvent */

/* START_OF_SYMBOL_DEFINITION ReportingEvent */
/**
 * @summary ReportingEvent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```@enum {number}
 */
export const ReportingEvent = _enum_for_ReportingEvent;
/* END_OF_SYMBOL_DEFINITION ReportingEvent */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_registration */
/**
 * @summary ReportingEvent_registration
 * @constant
 * @type {number}
 */
export const ReportingEvent_registration: ReportingEvent =
    ReportingEvent.registration; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_registration */

/* START_OF_SYMBOL_DEFINITION registration */
/**
 * @summary registration
 * @constant
 * @type {number}
 */
export const registration: ReportingEvent =
    ReportingEvent.registration; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION registration */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_request */
/**
 * @summary ReportingEvent_request
 * @constant
 * @type {number}
 */
export const ReportingEvent_request: ReportingEvent =
    ReportingEvent.request; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_request */

/* START_OF_SYMBOL_DEFINITION request */
/**
 * @summary request
 * @constant
 * @type {number}
 */
export const request: ReportingEvent =
    ReportingEvent.request; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION request */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_accept */
/**
 * @summary ReportingEvent_accept
 * @constant
 * @type {number}
 */
export const ReportingEvent_accept: ReportingEvent =
    ReportingEvent.accept; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_accept */

/* START_OF_SYMBOL_DEFINITION accept */
/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: ReportingEvent =
    ReportingEvent.accept; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accept */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_complete */
/**
 * @summary ReportingEvent_complete
 * @constant
 * @type {number}
 */
export const ReportingEvent_complete: ReportingEvent =
    ReportingEvent.complete; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_complete */

/* START_OF_SYMBOL_DEFINITION complete */
/**
 * @summary complete
 * @constant
 * @type {number}
 */
export const complete: ReportingEvent =
    ReportingEvent.complete; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION complete */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_corresponding */
/**
 * @summary ReportingEvent_corresponding
 * @constant
 * @type {number}
 */
export const ReportingEvent_corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_corresponding */

/* START_OF_SYMBOL_DEFINITION corresponding */
/**
 * @summary corresponding
 * @constant
 * @type {number}
 */
export const corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION corresponding */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_bulk */
/**
 * @summary ReportingEvent_bulk
 * @constant
 * @type {number}
 */
export const ReportingEvent_bulk: ReportingEvent =
    ReportingEvent.bulk; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_bulk */

/* START_OF_SYMBOL_DEFINITION bulk */
/**
 * @summary bulk
 * @constant
 * @type {number}
 */
export const bulk: ReportingEvent =
    ReportingEvent.bulk; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bulk */

/* START_OF_SYMBOL_DEFINITION ReportingEvent_interruption */
/**
 * @summary ReportingEvent_interruption
 * @constant
 * @type {number}
 */
export const ReportingEvent_interruption: ReportingEvent =
    ReportingEvent.interruption; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReportingEvent_interruption */

/* START_OF_SYMBOL_DEFINITION interruption */
/**
 * @summary interruption
 * @constant
 * @type {number}
 */
export const interruption: ReportingEvent =
    ReportingEvent.interruption; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION interruption */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingEvent */
let _cached_decoder_for_ReportingEvent: $.ASN1Decoder<ReportingEvent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingEvent */

/* START_OF_SYMBOL_DEFINITION _decode_ReportingEvent */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportingEvent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingEvent} The decoded data structure.
 */
export function _decode_ReportingEvent(el: _Element) {
    if (!_cached_decoder_for_ReportingEvent) {
        _cached_decoder_for_ReportingEvent = $._decodeEnumerated;
    }
    return _cached_decoder_for_ReportingEvent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportingEvent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingEvent */
let _cached_encoder_for_ReportingEvent: $.ASN1Encoder<ReportingEvent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingEvent */

/* START_OF_SYMBOL_DEFINITION _encode_ReportingEvent */
/**
 * @summary Encodes a(n) ReportingEvent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingEvent, encoded as an ASN.1 Element.
 */
export function _encode_ReportingEvent(
    value: ReportingEvent,
    elGetter: $.ASN1Encoder<ReportingEvent>
) {
    if (!_cached_encoder_for_ReportingEvent) {
        _cached_encoder_for_ReportingEvent = $._encodeEnumerated;
    }
    return _cached_encoder_for_ReportingEvent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportingEvent */

/* eslint-enable */
